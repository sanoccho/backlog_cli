import dotenv from 'dotenv'
import axios from 'axios';
import {formatDate} from './formatDate.mjs';
import commander from 'commander';

dotenv.config();
commander.parse(process.argv);

const apiKey = process.env.API_KEY;

//チケットのID
const issueId = commander.args[0];

const requestUrl = `https://renosy.backlog.com/api/v2/issues/${issueId}?apiKey=${apiKey}`

function getIssueInfo() {
    return axios.get(requestUrl)
        .then(response => {
            const ticket = response.data
            const formattedDueDate = formatDate(new Date(ticket.dueDate), 'YYYY-MM-DD');

            console.log(`${ticket.issueKey}: ${ticket.summary}`);
            console.log('期限日:', formattedDueDate);
            console.log('ステータス:', ticket.status.name);
            console.log('詳細:', ticket.description);
        })
        .catch(error => { console.log(error) })
}

getIssueInfo();
