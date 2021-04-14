import React from 'react';

import Link from 'next/link';
import LoaderComponent from "@iso/components/utility/loader.style";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import {palette} from "styled-tools";

const EditPostWrapper = styled.div`
  margin-top: 0;

  h2, h4, h5 {
    color: ${palette('primary', 0)};
    margin-top: 0;
    margin-bottom: 16px;
  }
`

function EditPost(props) {
    const {index, posts, size, title, content} = props;

    const isLoggedIn = useSelector((state) => state.Auth.indexToken);

    const renderTitle = () => {
        if (content) return null;
        return (
            <>
                {size === "lg" && (
                    <h2 className="text-blue">
                        {posts && posts.length > 0 ? posts[index].title : ''}
                    </h2>
                )}
                {size === "md" && (
                    <h4 className="text-blue">
                        {posts && posts.length > 0 ? posts[index].title : ''}
                    </h4>
                )}
                {size === "sm" && (
                    <h5 className="text-blue">
                        {posts && posts.length > 0 ? posts[index].title : ''}
                    </h5>
                )}
            </>
        )
    }

    const renderContent = () => {
        if (title) return null;
        return (
            <>
                {posts && posts.length > 0 ? (
                    <div dangerouslySetInnerHTML={{__html: posts[index].text}}/>
                ) : (
                    ''
                )}
            </>
        )
    }

    return (
        <EditPostWrapper>
            {posts && posts.length > 0 ? '' : <LoaderComponent/>}
            {renderTitle()}
            {renderContent()}
            {isLoggedIn && posts && posts.length > 0 && (
                <div className="text-center">
                    <Link href={`/admin/posts/${posts[index].index}`} className="edit-btn">
                        Edit
                    </Link>
                </div>
            )}
        </EditPostWrapper>
    );
}

EditPost.prototype = {
    size: PropTypes.string,
    posts: PropTypes.array,
    title: PropTypes.bool,
    content: PropTypes.bool,
}

EditPost.defaultProps = {
    size: 'md',
    title: false,
    content: false
}

export default EditPost;
