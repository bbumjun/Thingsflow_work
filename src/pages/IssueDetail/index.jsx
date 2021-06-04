import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import IssueItem from "../../components/IssueItem";
import { octokit } from "../../constants";
import ReactMd from "react-markdown";
const IssueDetail = ({ author, repository }) => {
  const { issueNumber } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchIssueDetail = async () => {
      try {
        setLoading(true);
        const response = await octokit.request(
          "GET /repos/{owner}/{repo}/issues/{issue_number}",
          {
            owner: author,
            repo: repository,
            issue_number: issueNumber,
          }
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIssueDetail();
  }, []);

  if (loading) return <Layout>Loading....</Layout>;
  if (data === null) return <Layout>Nothing to show</Layout>;

  return (
    <Layout>
      <IssueItem data={data} />
      <ReactMd>{data.body}</ReactMd>
    </Layout>
  );
};

export default IssueDetail;
