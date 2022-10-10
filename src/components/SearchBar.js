// import React, { Component } from 'react'


import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')

    // const onInputChange = (e) => {
    //     setTerm(e.target.value)
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term)
    }
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text"
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar



// export default class SearchBar extends Component {
//     state = { term: '' };
//     onInputChange = (e) => {
//         this.setState({ term: e.target.value })
//     }

//     onFormSubmit = (e) => {
//         e.preventDefault();

//         this.props.onFormSubmit(this.state.term)

//     }

//     render() {


//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type="text"
//                             onChange={this.onInputChange}
//                             value={this.state.term}
//                         />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
