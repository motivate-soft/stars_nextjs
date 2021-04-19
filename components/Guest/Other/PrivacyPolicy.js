import React from 'react';
import Link from 'next/link';
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import EditPost from "@components/Common/PostBlock/EditPost";


function PrivacyPolicy({posts}) {

    const handlesendContactEmail = () => {
        window.open(`mailto:hello@starsofboston.com`);
    };

    const handleCall = () => {
        window.open('tel:617-855-9576');
    };

    return (
        <>
            <Box as="section" className="main-background-2"/>
            <Box as="section" className="posts-block">
                <Container>
                    <h2>Privacy Policy</h2>
                    {/*<h2>Privacy Policy</h2>*/}
                    <EditPost index={80} posts={posts}/>

                    <EditPost index={68} posts={posts}/>
                    {/*What personal information*/}
                    <EditPost index={69} posts={posts}/>
                    {/*How do we use your information?*/}
                    <EditPost index={70} posts={posts}/>
                    {/*Sharing of Information*/}
                    <EditPost index={71} posts={posts}/>
                    {/*Security*/}
                    <EditPost index={72} posts={posts}/>
                    {/*Payment*/}
                    <EditPost index={73} posts={posts}/>
                    {/*Information you share*/}
                    <EditPost index={74} posts={posts}/>
                    {/*Disclosure*/}
                    <EditPost index={75} posts={posts}/>
                    {/*Third-party links*/}
                    <EditPost index={76} posts={posts}/>
                    {/*California Online Privacy Protection Act*/}
                    <EditPost index={77} posts={posts}/>

                    <ul className="contact-options">
                        <li>
                            By <span onClick={handlesendContactEmail}>emailing</span> us
                        </li>
                        <li>
                            By <span onClick={handleCall}>calling</span> us
                        </li>
                        <li>
                            Sending us a comment through our{' '}
                            <Link href="/Contact">
                                <span>contact us</span>
                            </Link>{' '}
                            page.
                        </li>
                    </ul>
                    {/*Children's Privacy*/}
                    <EditPost index={78} posts={posts}/>
                    {/*Contact*/}
                    <EditPost index={79} posts={posts}/>
                    {/*<h4>Contact</h4>*/}
                    {/*<p>If you have general questions about our Privacy Policy and practices or questions about your*/}
                    {/*personal data, you may <Link to="/Contact">contact us</Link>.</p>*/}
                </Container>
            </Box>
        </>
    );
}

export default PrivacyPolicy;
