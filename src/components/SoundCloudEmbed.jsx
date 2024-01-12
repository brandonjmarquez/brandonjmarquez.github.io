const SoundCloudEmbed = () => {
  return (
    <div className="self-center sm:w-1/2">
      <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1754747808&color=%23bd00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <div style={{fontSize:'10px', color:'#cccccc', lineBreak:'anywhere', wordBreak:'normal', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis', fontFamily:'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight:'100'}}>
        <a href="https://soundcloud.com/1bran" title="bran" target="_blank" style={{color: "#cccccc", textDecoration: 'none'}}>
          bran
        </a>
          · 
        <a href="https://soundcloud.com/1bran/sets/my-favs" title="my favs" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>
          my favs
        </a>
      </div>
    </div>
  )
}

export default SoundCloudEmbed;