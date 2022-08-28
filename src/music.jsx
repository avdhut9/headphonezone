
import styles from "./music.module.css"
function Music(){
   return(
    <div className={styles.Music} >
        <h1>
        LIKE YOU, WE LOVE MUSIC...
        </h1>
      <p>And we believe a Headphone is more than just an instrument for sound.</p>
      <p>It’s the key to a mind-blowing moment of emotion, bringing you closer to your favourite artist, and yourself.</p>
      <p>We’ve curated the world’s finest headphones & earphones to help you discover the riffs, percussions, basslines and solos that were always there</p>
      <p>but never heard.</p>
      <div className={styles.video}>
        
        <iframe title="" 
src="https://player.vimeo.com/video/681364200?autoplay=1&amp;autopause=1&amp;background=1&amp;loop=1&amp;muted=1&amp;transparent=0&amp;responsive=1&amp;portrait=0&amp;title=0&amp;byline=0&amp;color=444444" allow="autoplay; encrypted-media;" allowfullscreen="allowfullscreen">
</iframe>

      </div>
    </div>
   )
}

export{Music}