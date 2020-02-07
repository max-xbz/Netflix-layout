import React from 'react';
class MyList extends React.Component {
    render() {
        let items = () => {
            return this.props.mylist.map((item, index) => {
                return (
                    <div className="mylist-item" key={index}>
                        <img src={item.img} alt={item.title}/>
                        <div className="overlay"></div>
                        <div className="button" onClick={() => {this.props.removeOne(item.id)}}><p>Remove</p></div>
                    </div>
                );
            });
        }
        // let items = this.props.mylist.map((item, index) => {
        //     return (
        //         <div className="mylist-item" key={index}>
        //             <img src={item.img} alt={item.title}/>
        //             <div className="overlay"></div>
        //             <div className="button" onClick={() => {this.props.removeOne(item.id)}}><p>Remove</p></div>
        //         </div>
        //     );
        // });
        return (
            <div className="content-mylist">
                <div>
                    <h3>My List</h3>
                </div>
                <div className="mylist-items">
                    {this.props.mylist && items()}
                </div>
                
            </div>
        );
    }
}

export default MyList;