Notes on things I need to fix: 
2. Must press search button twice before search results are shown 
4. To add a song to tracklist must re-render search screen between additions 
5. if we logout and refresh page -- it saves isLogged as truec--- cant have things like a list based on is logged
6. Have browse and app stuff hidden if not logged in 


{thisList.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <ViewButton 
                            thisList={thisList}
                            setThisList={setThisList}
                            setDisplay={props.setDisplay} 
                            display={props.display} 
                            href={item.href} 
                            number={3} 
                            creatingPlaylist={props.creatingPlaylist} 
                            setCreatingPlaylist={props.setCreatingPlaylist} 
                            clickedSong={props.clickedSong}
                            setClickedSong={props.setClickedSong}/>
                    </div>
                ))}


 {thisList.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <ViewButton 
                            thisList={thisList}
                            setThisList={setThisList}
                            setDisplay4={props.setDisplay4} 
                            setDisplay3={props.setDisplay4}
                            href={item.href} 
                            number={3} 
                            creatingPlaylist={props.creatingPlaylist} 
                            setCreatingPlaylist={props.setCreatingPlaylist} 
                           />
                    </div>
                ))}