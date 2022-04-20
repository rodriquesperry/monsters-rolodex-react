import { Component } from "react";
/** Always import CSS for each component inside 
 * each component for searching sake
 */
import "../../search-box.styles.css";


class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className} `}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
