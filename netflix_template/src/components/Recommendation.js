import React from 'react';
class Recommendation extends React.Component {
    render() {
        let items = () => {
            return this.props.recom.map((item, index) => {
                return (
                    <div className="recommd-item" key={index}>
                        <img src={item.img} alt={item.title}/>
                        <div className="overlay"></div>
                        <div className="button" onClick={() => {this.props.addOne(item.id)}}><p>Add</p></div>
                    </div>
                );
            });
        }
        // let items = this.props.recom.map((item, index) => {
        //     return (
        //         <div className="recommd-item" key={index}>
        //             <img src={item.img} alt={item.title}/>
        //             <div className="overlay"></div>
        //             <div className="button" onClick={() => {this.props.addOne(item.id)}}><p>Add</p></div>
        //         </div>
        //     );
        // });
        return (
            <div className="content-recommd">
                <div>
                    <h3>Recommendation</h3>
                </div>
                <div className="recommd-items">
                    {this.props.recom && items()}
                </div>
                
            </div>
        );
    }
}

export default Recommendation;