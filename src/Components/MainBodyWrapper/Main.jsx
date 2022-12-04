import React from 'react'
import UniAndMac from'../MainBody/UniAndMac';
import MacbookPro from'../MainBody/Macbookpro';
import Iphone13 from'../MainBody/Iphone13';
import Iphone13pAndAwatch from'../MainBody/Iphone13pAndAwatch';
import IpadAandAppleA from'../MainBody/IpadAandAppleA';
import AppleCandAppleT from'../MainBody/AppleCandAppleT';
import YouTubeVideo from '../YoutubeComponent/YoutubeVideo';

function Main() {
  return (
    <div>
    <UniAndMac/>
    <MacbookPro/>
    <Iphone13/>
    <Iphone13pAndAwatch/>
    <IpadAandAppleA/>
    <AppleCandAppleT/>
    <YouTubeVideo/>
    </div>
  )
}

export default Main