import React, { useEffect } from 'react';
import '../../Components/Navbar/Navbar.css'
import '../Blog/Blog.css'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faXTwitter, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from 'react-share';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar';

function BlogPost3() {

  // browser tab title
  useEffect(() => {
    document.title = 'You Are One Mentor Away From Changing Your Life (Growth is Inevitable)';
  }, []);

  // Add the icons
  library.add(faLinkedin, faXTwitter, faFacebookSquare, faShareNodes)

  //copy link to clipboard
  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success('Link copied to clipboard')
  };

  // Email functionality
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "efae9b3c-bf15-4bd7-91ed-ff9435feb4d9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Email successfully sent.")
      event.target.reset();
    }
    else {
      console.log("Error", res)
      toast.error("Error while sending email.")
    }
  };

  return (
    <div>
        <Helmet>
            <title>You Are One Mentor Away From Changing Your Life (Growth is Inevitable) - Andres Choque</title>
            <meta name="description" content="How to Get a Mentor to Improve Your Life." />
            
            {/* OG Tags */}
            <meta property="og:title" content="You Are One Mentor Away From Changing Your Life (Growth is Inevitable) - Andres Choque" />
            <meta property="og:description" content="How to Get a Mentor to Improve Your Life." />
            <meta property="og:image" content="https://andreschoque.com/static/media/blog3.2991cee7e0f37b52c2b8.jpg" />
            <meta property="og:url" content="https://andreschoque.com/blog/you-are-one-mentor-away-from-changing-your-life" />
            
            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="You Are One Mentor Away From Changing Your Life (Growth is Inevitable) - Andres Choque" />
            <meta name="twitter:description" content="How to Get a Mentor to Improve Your Life." />
            <meta name="twitter:image" content="https://andreschoque.com/static/media/blog3.2991cee7e0f37b52c2b8.jpg" />
            <meta name="twitter:url" content="https://andreschoque.com/blog/you-are-one-mentor-away-from-changing-your-life"/>
        </Helmet>

        <div className='blog-post-header'>
            <div className='container'>
                <Navbar/>
            </div>
        </div>

        <div className='blog-post-content'>
            <div className='subscriber-container'>
                <h1>Haven't subscribed yet?</h1>
                <p>Join to get a dose of inspiration, insights, and a fresh perspective on life and business.</p>
                <form onSubmit={onSubmit}>
                    <input type="email" name="Blog-Subcriber-Email" id="" placeholder='Your Email' required />
                    <button type='submit'>Join</button>
                </form>
            </div>

            <div className='blog-content-container'>
                <h1><strong>You Are One Mentor Away From Changing Your Life (Growth is Inevitable)</strong></h1>
                <h2>July 28, 2024 | Andres Choque</h2> 

                <div className='socials'>
                <LinkedinShareButton url={currentUrl}>
                <a href="#linkedin-share"><FontAwesomeIcon icon={faLinkedin} /></a>
                </LinkedinShareButton>
                <TwitterShareButton url={currentUrl}>
                <a href='#twitter-share'><FontAwesomeIcon icon={faXTwitter}/></a>
                </TwitterShareButton>
                <FacebookShareButton url={currentUrl}>
                <a href="#facebook-share"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                </FacebookShareButton>
                <a href="#copy-link"><FontAwesomeIcon icon={faShareNodes} onClick={copyToClipboard}/></a>
            </div>
            <hr />

            <div className='blog-body'>
                <div className='container-blog'>

                    <p>Yesterday I found myself listening to FITXFEARLESS’ livestream trying to ‘lifemaxx’ his subscribers. ‘Lifemaxxing’ for the uninitiated, means to ‘improve your personal life’.</p>

                    <br />

                    <p>You probably heard a similar term called ‘looksmaxxing’ – which, using context clues, means to ‘improve your looks’.</p>

                    <br />
                    
                    <p>The initiative that Bismarck took on his channel FITXFEARLESS is to go live with his social media followers and provide them guidance on how to improve their lives.</p>

                    <br />
                    
                    <p>If you have watched his livestream, you can clearly see how much value he pours into his social media followers. The looks on their faces when they come and tell Bismarck their shortcomings and how their faces change when they receive the wisdom is remarkable.</p>

                    <br />
                    
                    <p>Sure, some of the questions his followers ask may seem silly and quite entertaining, it goes to show you how much of a need there is for mentors.</p>

                    <br />
                    
                    <p>His livestreams have multiple people watching them. He averages 1000 to 2000 people watching Him and learning from his guide and direction.</p>

                    <br />
                    
                    <p>He provides direction and clarity – two factors many people need to succeed in achieving goals, aspirations, and other ventures.</p>

                    <br />
                    
                    <p>Bismarck is not the only one providing mentorship, there are multiple creators providing guidance, wisdom, and mentorship. They can even be separated into different categories for example:</p>

                    <div className='emphasis'>
                        <p>- Benjamin Seda: His YouTube channel (formerly known as Based Zeus) provides dating coaching/mentorship.</p>

                        <p>- Alex Costa / Marcel Florus: Provide mentorship on men’s fashion and lifestyle.</p>

                        <p>- Jose Zuinga: (Teachingmensfashion) Provides guidance on business, self-help, and fashion.</p>

                        <p>- Martel Metellus: Does mentorship on entrepreneurship and personal branding.</p>

                        <p>- Dan Koe: Gives wisdom on entrepreneurship, self-help, and business.</p>
                    </div>

                    <p>The list goes on and on. Why is that the case? Why are there so many creators who are in the space of coaching/mentorship?</p>

                    <br />

                    <p>The simple answer is the <strong className='newton'>NEED</strong> is there. Taking out the business aspect of it (supply and demand) you can clearly see that there is a lack of guidance. This has been enhanced with social media. Social media not only allows everyone to see what everyone else is doing, but it also allows for comparisons to happen.</p>

                    <br />
                    
                    <p>Now what comes with comparison? – it’s simple. Dissatisfaction. Why dissatisfaction? It’s because when we see other people thrive, we want that for ourselves. The next question would be – How can I get there? What steps do I need to take to get there? How can I position myself to thrive?</p>

                    <br />
                    
                    <p>The answer to all these questions is mentorship. See, all the greats in history have had some sort of exposure to mentorship. Look at Alexander the Great. As you may know he conquered eastern Mediterranean, Egypt, the Middle East, and parts of Asia. Guess who was his tutor and mentor? – it was the great Aristotle.</p>

                    <br />
                    
                    <p>Another example, Warren Buffet is one of the greatest American investors of all time. His mentor was Benjamin Graham. Benjamin Graham is regarded as ‘father of value investing’. In the technology space, Steve Jobs mentored Mark Zuckerberg. Zuckerberg owns multiple social media platforms and technology companies.</p>

                    <br />
                    
                    <p>In the Bible, Moses the leader of Israel mentored Joshua to lead his people. Paul mentored Timothy in the advancement of Christianity. He did this even while being captive as well.</p>

                    <br />
                    
                    <p>Mentorship programs come at a cost. But when you compare the now with your future potential self, there is no comparison to be made. Think of it as an investment.</p>

                    <br />
                    
                    <p>That’s why mentorship is crucial. If you want to achieve something, you can only get so far with your own strengths. You need someone to push you harder, to guide you, and to be a support system.</p>

                    <br />
                    
                    <p>The big question is: <em className='newton'>How can I find a mentor?</em> Before I answer this question. I encourage you to dig deep and try to figure out what is your end goal. What do you want to achieve? You will have the clarity to move forward.</p>

                    <br />
                    
                    <p>After you have identified what your end goal is I would recommend doing the following:</p>

                    <br />

                    <h3><strong>1) Research First</strong></h3>

                    <br />

                    <p>For example, if you want to become financially successful, then I would research who is currently successful doing that. I would research their social media accounts and see what their colleagues, work partners, or (if they provide coaching services) what testimonials they have. Make sure your research is thorough. Beware of the hundreds of scams present online.</p>

                    <br />
                    
                    <h3>2)	Setup An Initial Consulation</h3>

                    <br />

                    <p>Contact this person. Make sure you can set up a meeting, call, or consultation with them. You always want to make sure and ‘vet’ that the person is right, the relationship is right for the two of you, and you will reach your desired outcome with this person. This is the meeting where you will discuss what your goals are and if it makes sense to move along.</p>

                    <br />
                    
                    <h3>3)	Establish Formality of Mentor & Mentee</h3>

                    <br />

                    <p>Once the agreement makes sense then you will need to make an effort to be committed to this agreement. Especially if this is a paid service. You do not want to waste your time and the mentor’s time. Remember the mentor is there to help you not to hurt you.</p>

                    <br />

                    <h3>4)	Begin The Journey</h3>

                    <br />

                    <p>Arguably, this is the hardest step. You will need to demonstrate that you are committed and that you care about what you want to become. As mentioned, in my Article on Intentionality you can read <Link className='link' to='/blog/how-to-be-intentional-after-school' target="_blank" rel="noreferrer noopener" aria-label='link-to-article'>here</Link>. Once you get momentum you will never stop. The mentor will keep you accountable.</p>

                    <br />
                    
                    <p>I want you to become something greater. Get a mentor as soon as you can.</p>

                    <p>I hope this helps you in your personal development journey.</p>

                    <p>Blessings,</p>

                    <p>- <em> Andres</em></p>

                    <hr />
                </div>
            </div>
            </div>
        </div>

        <div>
            <Link to={'/blog'} className='btn'>Back</Link>
        </div>

        <div className='copyright'>
            <p>©️ 2024 Andres Choque. All rights reserved.</p>
        </div>
    </div>

    
  )
}

export default BlogPost3