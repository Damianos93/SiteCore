import React, { Component } from "react";
import { getCollectionsAsync, getAssetsByCollectionAsync } from "../data";
import AssetComponent from "./AssetComponent";
import CollectionsComponent from "./CollectionsComponent";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class MasterAssets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      assets: [],
      view: true,
      masterPath: "",
      masterId: "",
      masterIds: [],
    };
  }
  masterHandler=(value, id)=> {
    this.setState({
      masterPath: value,
      masterId: id,
    });
  }
  componentDidMount() {
    getCollectionsAsync()
      .then((res) =>
        this.setState({
          collections: res,
        })
      )
      .catch((err) => console.log(err));
  }

  handleCol = (id) => {
    getAssetsByCollectionAsync(id)
      .then((res) =>
        this.setState({
          assets: res,
        })
      )
      .catch((err) => err);
  };

  handleNameSort = () => {
    let arr = [...this.state.assets];
    let sortArr = arr.sort(function (a, b) {
      var x = a.name;
      var y = b.name;
      return x < y ? -1 : x > y ? 1 : 0;
    });
    this.setState({ assets: sortArr });
  };

  handleIdSort = () => {
    let arr = [...this.state.assets];
    let sortArr = arr.sort(function (a, b) {
      var x = a.id;
      var y = b.id;
      return x > y ? -1 : x < y ? 1 : 0;
    });
    this.setState({ assets: sortArr });
  };
  render() {
    if (this.state.collections.length === 0) {
      return (
        <>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
          </Button>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </>
      );
    }
    return (
      <Row className="back-ground">
        <Col>
          {this.state.collections.map((el) => {
            return (
              <div onClick={() => this.handleCol(el.id)} key={el.id}>
                <CollectionsComponent
                  id={el.id}
                  name={el.name}
                  tags={el.tags.name}
                  subTag={el.tags.subTag.name}
                  subTagName={el?.tags?.subTag?.subTag?.name}
                  masterPath={this.state.masterPath}
                  masterId={this.state.masterId}
                />
              </div>
            );
          })}
        </Col>
        <Col className="right-full">
          <DropdownButton
            id="dropdown-basic-button"
            title="Sort By"
            className="mt-5 left-align"
          >
            <Dropdown.Item onClick={this.handleNameSort}>Name</Dropdown.Item>
            <Dropdown.Item onClick={this.handleIdSort}>Id</Dropdown.Item>
          </DropdownButton>
          {this.state.assets.map((el) => {
            return (
              <AssetComponent
                key={el.id}
                name={el.name}
                path={el.path}
                id={el.id}
                collectionId={el.collectionId}
                masterPath={this.masterHandler}
              />
            );
          })}
        </Col>
      </Row>
    );
  }
}

export default MasterAssets;
