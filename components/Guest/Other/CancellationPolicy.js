import React from 'react';
import Link from 'next/link';
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import EditPost from "@components/common/PostBlock/EditPost";


function CancellationPolicy({posts}) {
    return (
        <>
            <Box as="section" className="main-background-2"/>
            <Box as="section" className="posts-block">
                <Container>
                    <h2>Refund Policy</h2>
                    <EditPost index={80} posts={posts}/>
                    {/*Cancellation Policy*/}
                    <EditPost index={81} posts={posts}/>
                    {/*Refundable Security Deposit*/}
                    <EditPost index={82} posts={posts}/>
                    <p>
                        If you have any questions regarding the refund policy or payment policy,
                        please send us an email at info@starsofboston.com or contact us from the{' '}
                        <Link href="/contact">contact us</Link> page.
                    </p>
                </Container>
            </Box>
        </>
    );
}

export default CancellationPolicy;
