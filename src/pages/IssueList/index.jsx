import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IssueItem from "../../components/IssueItem";
import Layout from "../../components/Layout";
import { octokit } from "../../constants";
const IssueList = ({ author, repository }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchIssueList = async () => {
      try {
        setLoading(true);
        const response = await octokit.request(
          "GET /repos/{owner}/{repo}/issues",
          {
            owner: author,
            repo: repository,
            sort: "comments",
          }
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIssueList();
  }, []);

  if (loading) return <Layout>Loading....</Layout>;
  if (data.length === 0) return <Layout>Nothing to show</Layout>;

  return (
    <Layout>
      <ul>
        {data.map((item) => (
          <Link
            to={`issuses/${item.number}`}
            key={item.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <IssueItem data={item} />
          </Link>
        ))}
      </ul>
    </Layout>
  );
};

export default IssueList;
