// Global
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IPost } from '../../types/appTypes';
import api from '../../services/api';
import Layout from '../../components/shared/Layout';
import Loading from '../../components/shared/Loading';

type IProps = RouteComponentProps<{
  postID: string;
}>;

export default function Post({
  match: {
    params: { postID },
  },
}: IProps) {
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    try {
      (async () => {
        setPost(await api.fetchPost(postID));
        setError(false);
      })();
    } catch (_) {
      setError(true);
    }
  }, []);


  return (
    <Layout>
      {post === null ? (
        <Loading />
      ) : (
        <div>
          <div>{post.title}</div>
          <div>hello</div>
        </div>
      )}
    </Layout>
  );
}
