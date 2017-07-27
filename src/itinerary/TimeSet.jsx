import React, { Component } from 'react';

class TimeSet extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }




  render() {
    return (
      <div className="time-set has-text-centered">
        <div className="column is-6 time-input">
          <input className="input has-text-centered" type="number" placeholder="9" onChange={this.props.handleChange.bind(this)} />
          <div className="select is-multiple" >
          </div>
        </div>
        <div className="column is-6 am">
          <div className="select is-multiple day-night">
            <select multiple size="2" onClick={this.props.submitAM.bind(this)}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSet;
// Logic for rendering times based on start time and duration of card 
//       <div className="has-text-centered">
//          {
//           timeArray.map((time) => {
//             if(time === 9){
//                return <div className="time">
//                <h6 className="title is-6">{`${time} : 00`}</h6>
//             </div>;
//             } else {
//               return <div className="time" style={{marginTop: time*12 + 'px'}}>
//                <h6 className="title is-6">{`${time} : 00`}</h6>
//             </div>;
//             }
//           })
//         } 
//         </div>
//     );
//   }
// }
      // <div className="time has-text-centered">
      //   <h6 className="title is-6">{this.props.time} : 00</h6>
      // </div>