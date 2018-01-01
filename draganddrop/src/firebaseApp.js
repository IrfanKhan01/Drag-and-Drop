import React, { Component } from 'react';
import firebase from 'firebase';

class FirebaseApp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            currentItem: '',
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.username)
        const itemRef = firebase.database().ref('Items');
        const item = {
            title: this.state.currentItem,
            user: this.state.username
        };
        itemRef.push(item);
        this.setState({
            currentItem: '',
            username: ''
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        const itemsRef = firebase.database().ref('Items');
        itemsRef.on('value', (snapshot) => {
            console.log(snapshot.val());
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    title: items[item].title,
                    user: items[item].user
                });
            }

            this.setState({
                items: newState
            });
        });
    }
    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/Items/${itemId}`);
        itemRef.remove();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-info">
                    <span className='navabr-brand text-light'>DnD App</span>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>

                <div className='container'>
                    <section className='add-item'>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-4'>
                                <div className='card' style={{ marginTop: '5%' }}>
                                    {/* <div className='card-header'>Create Todo</div> */}
                                    <div className='card-body'>
                                        <h4>Create Item</h4>
                                        <form onSubmit={this.handleSubmit} action="">
                                            <div style={{ margin: '2% auto' }} className='input-group'>
                                                <input className='form-control' type="text" name='username' placeholder='What is your name?' onChange={this.handleChange} value={this.state.username} />
                                            </div>
                                            <div className='input-group'>
                                                <input className='form-control' type="text" name='currentItem' placeholder='what are you bringing?' onChange={this.handleChange} value={this.state.currentItem} />

                                            </div>
                                            <button style={{ marginTop: '5%' }} className='btn btn-info float-right' type='submit'>Add Item</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-4'></div>
                        </div>


                    </section>
                    <div style={{ margin: '2% auto' }}>
                        <div className='row'>

                            <div className='col-md-3'>
                                <div className='card border-secondary'>
                                    <div className='card-header'>
                                        <h3 className='text-secondary'>Todo</h3>

                                    </div>
                                    <div className='card-body'>
                                        <ul className='list-group'>
                                            {
                                                this.state.items.map(item => {
                                                    return (
                                                        <li style={{marginTop:'2%'}} className='card' key={item.id}>
                                                            <div className='card-body'>
                                                                <h4 className='card-title'>{item.title}</h4>
                                                                <p>Brought by: {item.user}</p>
                                                                <div>
                                                                    <button className='btn btn-outline-danger btn-sm float-right' onClick={() => { this.removeItem(item.id) }}>Delete</button>
                                                                </div>
                                                            </div>

                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card border-warning'>
                                    <div className='card-header'>
                                        <h3 className='text-warning'>Doing</h3>
                                    </div>
                                    <div className='card-body'>

                                        <ul className='list-group'>
                                            <div className='card'>
                                                <div className='card-body'>Drop Item</div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card border-info'>
                                    <div className='card-header'>
                                        <h3 className='text-info'>Reviews</h3>
                                    </div>
                                    <div className='card-body'>
                                        <ul className='list-group'>
                                            <div className='card'>
                                                <div className='card-body'>Drop Item</div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-3'>
                                <div className='card border-success'>
                                    <div className='card-header'> <h3 className='text-success'>Done</h3></div>
                                    <div className='card-body'>
                                        <ul className='list-group'>
                                            <div className='card'>
                                                <div className='card-body'>Drop Item</div>
                                            </div>
                                        </ul>

                                    </div>
                                </div>



                            </div>

                        </div>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default FirebaseApp