Notes on things I need to fix: 
2. Must press search button twice before search results are shown 
4. To add a song to tracklist must re-render search screen between additions 
5. if we logout and refresh page -- it saves isLogged as truec--- cant have things like a list based on is logged
- Really to fix playlist views because its all fucked up


{thisList.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <ViewButton 
                            profileInfo={props.profileInfo}
                            thisList={thisList}
                            setThisList={setThisList}
                            setDisplay={props.setDisplay} 
                            display={props.display} 
                            href={item.href} 
                            number={3} 
                            creatingPlaylist={props.creatingPlaylist} 
                            setCreatingPlaylist={props.setCreatingPlaylist}
                            playlistDescription={props.playlistDescription}
                            playlistTitle={props.playlistTitle}
                            setPlaylistDescription={props.setPlaylistDescription}
                            setPlaylistTitle={props.setPlaylistTitle}
                          
                        />
                    </div>
                ))}