import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const App = () => {

    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        onTermSubmit('cat')
    }, [])

    const onTermSubmit = async (term) => {
        // console.log(term)
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        setVideos(res.data.items)
        setSelectedVideo(res.data.items[0])
    }

    // const onVideoSelect = (video) => {
    //     // console.log('From the App', video)
    //     setSelectedVideo(video)
    // }

    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={onTermSubmit} />
            {/* I have {this.state.videos.length} videos. */}
            <div className="ui grid">
                <div className="ui row">
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App


// export default class App extends Component {

//     state = { videos: [], selectedVideo: null }

//     //預設資料 當網頁載入時預設的搜尋結果
//     componentDidMount() {
//         this.onTermSubmit('cat')
//     }


//     onTermSubmit = async (term) => {
//         // console.log(term)
//         const res = await youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         })
//         // console.log(res)
//         this.setState({
//             videos: res.data.items,
//             // 搜尋的第一筆當作預設播放
//             selectedVideo: res.data.items[0]
//         })
//     }

//     onVideoSelect = (video) => {
//         console.log('From the App', video)
//         this.setState({ selectedVideo: video })
//     }



//     render() {
//         return (
//             <div className='ui container'>
//                 <SearchBar onFormSubmit={this.onTermSubmit} />
//                 {/* I have {this.state.videos.length} videos. */}
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className='eleven wide column'>
//                             <VideoDetail video={this.state.selectedVideo} />
//                         </div>
//                         <div className='five wide column'>
//                             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
