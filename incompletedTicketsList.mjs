import dotenv from 'dotenv'
import axios from 'axios';
import {formatDate} from './formatDate.mjs';

dotenv.config();

const apiKey = process.env.API_KEY;
const baseUrl = 'https://renosy.backlog.com'
const userIdEndpoint = baseUrl + '/api/v2/users/myself' + '?' + 'apiKey=' + apiKey;

async function GetUserId() {
  const response = await axios.get(userIdEndpoint).catch(function (error) {
      console.log(error.response.status, error.response.statusText);
  });
  const userId = response.data.id;
  return userId
};

//ユーザーのチケット一覧を取得
async function getIncompletedTickets() {
  const userId = await GetUserId();
  const response = await axios.get(`${baseUrl}/api/v2/issues`, {
    params: {
      apiKey: apiKey,
      assigneeId: [userId],
      statusId: [1,2,3]
    }
  } ).catch(function (error) {console.log(error);})

  response.data.forEach(function(ticket, index) {
    const dueDate = new Date(ticket.dueDate);
    const formattedDueDate = formatDate(dueDate, 'YYYY-MM-DD');
    console.log(`${ticket.issueKey}: ${ticket.summary} (due: ${formattedDueDate})`);
  })
};

getIncompletedTickets();
