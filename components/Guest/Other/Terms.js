import React from 'react';
import Link from 'next/link';
import EditPost from "@components/common/PostBlock/EditPost";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";


function Terms({posts}) {
    return (
        <>
            <Box as="section" className="main-background-2"/>
            <Box as="section" className="posts-block">
                <Container>
                    <h2>Terms & Conditions</h2>
                    {/*Overview*/}
                    <EditPost index={52} posts={posts}/>
                    {/*STARS of Boston Terms*/}
                    <EditPost index={53} posts={posts}/>
                    {/*General Conditions*/}
                    <EditPost index={54} posts={posts}/>
                    {/*Services*/}
                    <EditPost index={56} posts={posts}/>
                    {/*Accuracy of Billing and Account Information*/}
                    <EditPost index={57} posts={posts}/>
                    {/*User Comments, Feedback, and Other Submissions*/}
                    <EditPost index={58} posts={posts}/>
                    {/*Errors, Inaccuracies, and Omissions*/}
                    <EditPost index={59} posts={posts}/>
                    {/*Prohibited Uses*/}
                    <EditPost index={60} posts={posts}/>
                    {/*Disclaimer of Warranties; Limitation of Liability*/}
                    <EditPost index={61} posts={posts}/>
                    {/*Indemnification*/}
                    <EditPost index={62} posts={posts}/>
                    {/*Severability*/}
                    <EditPost index={63} posts={posts}/>
                    {/*Termination*/}
                    <EditPost index={64} posts={posts}/>
                    {/*Entire Agreement*/}
                    <EditPost index={65} posts={posts}/>
                    {/*Govering Law*/}
                    <EditPost index={66} posts={posts}/>
                    {/*Changes to Terms of Service*/}
                    <EditPost index={67} posts={posts}/>
                    {/*Contact Information*/}
                    <EditPost index={68} posts={posts}/>
                    <p>
                        Questions about the Terms of Service, can be sent via email to
                        info@starsofboston.com or from the <Link href="/Contact">contact us</Link>{' '}
                        page.
                    </p>
                </Container>
            </Box>
        </>
    );
}

export default Terms;
