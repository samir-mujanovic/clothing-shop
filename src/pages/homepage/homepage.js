import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import Directory from "../../components/Directory/Directory";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import CustomButton from "../../components/CustomButton/CustomButton";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  render() {
    const { collections } = this.props;
    return (
      <section className="home-page">
        <div className="container-fluid p-0">
          <Directory />
        </div>
        <div className="featured-section">
          <HeadingTitle
            title="Popular Products"
            subtitle="Freegan actually brunch, lumbersexual fanny pack aesthetic tbh tofu
      cardigan yr quinoa hot chicken bushwick normcore."
          />
          <div className="container spacing">
            {collections
              .filter(
                (item) => item.title === "Womens" || item.title === "Mens"
              )
              .map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />;
              })}
          </div>
        </div>
        <div
          className="parallax-section"
          style={{
            backgroundImage: `url("./assets/img/home-parallax.jpg")`,
          }}
        >
          <h5>The Chloe Collection</h5>
          <h2>The Project Fashion</h2>
          <CustomButton title="More Info" />
        </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(mapStateToProps, (null, mapDispatchToProps))(HomePage);
