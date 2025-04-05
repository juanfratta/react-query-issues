import { FiSkipBack } from "react-icons/fi";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { IssueComment } from "../components/IssueComment";
import { LoadingSpinner } from "../../shared";
import { useIssue } from "../hooks";

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams();

  const issueNumber = Number(params.issueNumber ?? 0);
  const { issueQuery, commentsQuery } = useIssue(issueNumber);

  if (issueQuery.isLoading) {
    return <div>Loading issue ...</div>;
  }

  if (!issueQuery.data) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

      {/* Primer comentario */}

      <IssueComment issue={issueQuery.data} />

      {/* Comentarios de otros */}

      {commentsQuery.isLoading ? (
        <LoadingSpinner size={40} />
      ) : (
        commentsQuery.data?.map((comment) => (
          <IssueComment key={comment.id} issue={comment} />
        ))
      )}
    </div>
  );
};
