import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../MenuItem/MenuItem";

const Directory = ({ sections }) => {
  return (
    <div className="row no-gutters">
      {sections.map(({ id, ...otherSectionsProps }) => {
        return <MenuItem key={id} {...otherSectionsProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
