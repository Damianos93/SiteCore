import React, { Component } from 'react'
import { getCollectionsAsync,getAssetsByCollectionAsync } from "../data"
import AssetComponent from "./AssetComponent"
import CollectionsComponent from "./CollectionsComponent"
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
class MasterAssets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: [],
            assets:[],
            view:true
        }
    }

    componentDidMount() {
        getCollectionsAsync()
            .then(res =>
                this.setState({
                    collections: res
                })
            )
            .catch(err => console.log(err))
    }

    handleCol=id=>{ getAssetsByCollectionAsync(id)
        .then(res=> this.setState({
            assets: res
        })).catch(err=>err)
    
    }

    render() {
        if(this.state.collections.length===0){
            return  (
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
       
          </> )
        }
        return (
            <div>
                {this.state.collections.map(el => {
                    return ( 
                                <div onClick={()=>this.handleCol(el.id)} key={el.id}>
                                <CollectionsComponent  
                                
                                name={el.name}
                                tags={el.tags.name}
                                />
                                </div>
                    )
                }
                )}
            {this.state.assets.map(el=>{
                return (
                    <AssetComponent 
                    key={el.id}
                    name={el.name}
                    path={el.path}
                    />
                )
            })}
            </div>
        )
    }
}

export default MasterAssets
