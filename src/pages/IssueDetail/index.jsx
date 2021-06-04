import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import IssueItem from "../../components/IssueItem";
import { octokit } from "../../constants";
const IssueDetail = () => {
  const { issueNumber } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchIssueDetail = async ({ author, repository }) => {
      try {
        setLoading(true);
        const response = await octokit.request(
          "GET /repos/{owner}/{repo}/issues",
          {
            owner: author,
            repo: repository,
            issue_number: issueNumber,
          }
        );
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIssueDetail();
  }, []);

  if (loading) return <Layout>Loading....</Layout>;
  if (data.length === 0) return <Layout>Nothing to show</Layout>;

  return (
    <Layout>
      <div>ddd</div>
      <IssueItem />
    </Layout>
  );
};

export default IssueDetail;
