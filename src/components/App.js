import React from 'react';
import SearchBar from './SeachBar'
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component{
    // make sure you use the 
    // async and await as this is a promise call
    // Initialize array ...
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onTermSubmit('Devon Artis');
    }
    onTermSubmit = async term => {
        // (await) to the promise returns
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
           
        });
        
        this.setState({videos: response.data.items,
        selectedVideo: response.data.items[0]});
        //console.log(response);
        
    };

    onVideoSelect = (video) => {
        console.log('From the App!', video);
        this.setState({selectedVideo: video});
    };

    
    render() {
        return(
            <div className="ui container">
             <SearchBar onFormSubmit={this.onTermSubmit}/> 
                <div className="ui grid">
                   <div className="ui row">
                   
                      <div className="eleven wide column">
                       <VideoDetail video={this.state.selectedVideo} />
                      </div>
                          <div className="five wide column">
                             <VideoList onVideoSelect={this.onVideoSelect} 
                              videos={this.state.videos}/>
                            </div>
                    </div>
                </div>
            
              
               
            </div>
        );
    }

}

export default App;

