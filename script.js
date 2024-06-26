function toggleElement() {
    let element = document.getElementById("accaunt");
    if (element.style.display === "none") {
      element.style.display = "block"; // Or any other display value you want to use
    } else {
      element.style.display = "none";
    }
}
// this adds home section to the main when page is succesfully loades
// window.onload = function() {
//     const newSection = document.createElement('section');
//     newSection.id = 'home';
//     newSection.className='home';
//     newSection.innerHTML = '';
    
//     document.main.appendChild(newSection);
//   };



document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('song-name');
    const output = document.getElementById('home');
  
    textInput.addEventListener('keydown', async function(event) {
      if (event.key === 'Enter') {
        const inputValue = textInput.value;

        const url =`https://deezerdevs-deezer.p.rapidapi.com/search?q=${inputValue}`;
        const options = {
        	method: 'GET',
        	headers: {
        		'X-RapidAPI-Key': '902d90da72mshfad27c9b108d434p191acejsn81db4bf0c071',
        		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        	}
        };
            
            try {
            	const response = await fetch(url, options);
            	const result = await response.json();
            	console.log(result);
                output.innerHTML = `
                <div class="home-list" style="margin-left: 50px;">
                <ul>
                    <li>
                        <a href="#">Song</a>
                    </li>
                    <li>
                        <a href="#">Video</a>
                        </li>
                    <li>
                        <a href="#">Albums</a>
                    </li>
                    <li>
                        <a href="#">Artists</a>
                    </li>
                    <li>
                        <a href="#">Featured playlists</a>
                    </li>
                    <li>
                        <a href="#">Community playlists</a>
                    </li>
                    <li>
                        <a href="#">Profiles</a>
                    </li>
                </ul>
                </div>
                    <div style="margin:15px 50px;">
                        <h1>Top result</h1>
                    </div>
                    <div class="output">
                        <div class="output-left">
                            <div class="output-left_img">
                                <a href="#"><i class="fa fa-play" aria-hidden="true"></i><img src="https://picsum.photos/150" alt=""></a>
                                <div class="output-left_cont">
                                    <h2>${result.data[0].artist.name}</h2>
                                    <p>${result.data[0].album.title}</p>
                                    <div class="output-left_btn">
                                        <button class="play" id="play"><i class="fa fa-play" aria-hidden="true"></i>play</button>
                                        <button><i class="fa fa-plus-square" aria-hidden="true"></i>save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="output-right">
                            <h3>MORE FROME YOUTUBE</h3>
                            <div class="output-right_list">
                                <ul>
                                    <li>
                                        <a href="#" id="play">
                                            <img src="https://picsum.photos/70" alt="">
                                            <div>
                                                <p>${result.data[1].artist.name}</p>
                                                <small>${result.data[1].album.title}</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" id="play">
                                            <img src="https://picsum.photos/70" alt="">
                                            <div>
                                                <p>${result.data[2].artist.name}</p>
                                                <small>${result.data[2].album.title}</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" id="play">
                                            <img src="https://picsum.photos/70" alt="">
                                            <div>
                                                <p>${result.data[3].artist.name}</p>
                                                <small>${result.data[3].album.title}</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                `;

                // Call the function that contains the second event listener using await
                await secondEventListenerFunction(result);
                
                console.log(result.data[0].preview )

            }
            catch (error) {
            	console.error(error.massage);
            }

    
        
        
      }
    });
  
    
    // this creats music player in the footer place
  
    // Define the function for the second event listener
    function secondEventListenerFunction(result) {
        const playerBtn = document.getElementById('play');
    
        playerBtn.addEventListener('click', function() {
          const newDiv = document.createElement('div');
          newDiv.className = 'music-player';
          newDiv.innerHTML = `
          <div class="music-player" id="music-player">
              <audio id="my-audio" controls>
                  <source src='${result.data[0].preview}' type="audio/mpeg">
                  Your browser does not support the audio element.
              </audio>
          </div>
          `;
        
          document.body.appendChild(newDiv);
        });
    }
  });
