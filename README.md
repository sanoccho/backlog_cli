# backlog_cli

##description
This package allows you to execute three things from your CLI;
1. Check your incompleted issue tickets list of all projects you're assiged
2. Show tickets' details of your own
3. Update issue tickets' status

##install
1. Run the `npm install -g backlog_cli` to install the package.
2. Execute `sh index.sh` and follow instructions to set up your API_KEY.
3. 0nce you're done with #2, you're ready to use CLI!



##API
1. when you want to check your incompleted tickets list...
```
node incompletedTicketsList.mjs
```
2. when you want to check further info about your tickets in your list above...
```
node showTicketsDetail.mjs [your ticket ID]
```
3. when you want to update your ticket status...

```
node updateIssueStatus.mjs [your ticket ID] [new status]
```
specify the new status fro below and give that word correctly to the command.
```
 未着手: 'open'
 
 処理中: 'in_progress'
   
 処理済み: 'resolved'

 完了: 'closed'
```


