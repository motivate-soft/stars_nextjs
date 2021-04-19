import React from 'react';
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import EditPost from "@components/Common/PostBlock/EditPost";


function CookiePolicy({posts}) {
    return (
        <>
            <Box as="section" className="main-background-2"/>
            <Box as="section" className="posts-block">
                <Container>
                    <h2>Cookie Policy</h2>
                    {/*<EditPost index={94} posts={posts}/>*/}
                </Container>
            </Box>
        </>
    );
}

export default CookiePolicy;
