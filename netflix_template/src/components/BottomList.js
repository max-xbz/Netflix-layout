import React from 'react';

class BottomList extends React.Component {
    render() {
        let items = () => {
            return this.props.list.map((item, index) => {
                return (
                    <li className="bottom-item" key={index}>
                        {item.title}
                    </li>
                );
            });
        }
        return (
            <div className="content-bottom">
                <ul>
                    {this.props.list && items()}
                </ul>
            </div>
        );
    }
}

export default BottomList;