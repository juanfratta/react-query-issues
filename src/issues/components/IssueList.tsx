import { IssueItem } from './IssueItem';
import { GithubIssue } from '../interfaces/issue.interface';

export const IssueList = ({issues}: {issues: GithubIssue[]}) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue}/>
        ))}
      </div>
    </>
  );
};
