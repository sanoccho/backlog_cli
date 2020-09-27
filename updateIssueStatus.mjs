import dotenv from 'dotenv';
import axios from 'axios';
import commander from 'commander';

dotenv.config();
commander.parse(process.argv);

//チケットのID
const issueId = commander.args[0];

const apiKey = process.env.API_KEY;
const requestUrl = `https://renosy.backlog.com/api/v2/issues/${issueId}?apiKey=${apiKey}`

//更新するステータス
const newStatus = commander.args[1];

function convertStatusToInteger(newStatus) {
  switch (newStatus) {
    case 'open':
      return 1;
    case 'in_progress':
      return 2;
    case 'resolved':
      return 3;
    case 'closed':
      return 4;
    default:
      console.log(`Sorry, the status ${newStatus} is not prefixed in this app.`)
  }
}

async function getIssueInfo() {

  const response = await axios.get(requestUrl).catch(function (error) {console.log(error);})
  return response.data.status.id.toString();
}

//課題のステータスを更新する
async function updateIssueStatus(issueId, newStatus) {

  const status = new URLSearchParams();
  status.append('statusId', convertStatusToInteger(newStatus))

  const current_status = await getIssueInfo();

  if (status.get('statusId') === current_status) {
    console.log(`${issueId} is already ${newStatus}`)
    return;
  }

  const response = await axios.patch(requestUrl, status).catch(error => {console.log(error);})
  if (response.status === 200) {
    console.log(`issue:${issueId}のステータスを${newStatus}に更新しました`);
  }
}

updateIssueStatus(issueId, newStatus);
