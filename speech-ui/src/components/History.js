import Table from 'react-bootstrap/Table';
import '../style/history.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

function History() {

	var count = 1;
	const [history, setHistory] = useState([])
	const mail = localStorage.getItem('mail')
	useEffect(() => {
		async function fetchData() {
			const res = await axios.get('http://localhost:8080/history/' + mail)
			setHistory(res.data)

		}
		fetchData();
	})
	return (
		<>
			<Table className="table" striped bordered hover>
				<thead>
					<tr>
						<th>SNo</th>
						<th>Link</th>
						<th>Score</th>
						<th>Text</th>
					</tr>
				</thead>
				<tbody>
					{
						history.map((record) => (
							<tr key={count}>
								<td>{count++}</td>
								<td>{record.uploadDate}</td>
								<td>{record.score}</td>
								<td>{record.refText}</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		</>
	)
}
export default History;