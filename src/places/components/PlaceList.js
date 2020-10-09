import React from 'react';
import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card';

function PlaceList(props) {
  if(props.items.length === 0) {
    return <div className="place-list center">
      <Card>
        <h2> No places found. May be create one?</h2>
        <button>Share Place</button>
      </Card>
    </div>
  }

  return (
    <div>
      
    </div>
  )
}

export default PlaceList
