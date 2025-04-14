import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnalyticsDashboard = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await axios.get('/api/track/documents');
        setDocuments(res.data);
      } catch (err) {
        console.error('Failed to fetch documents', err);
      }
    };

    fetchDocs();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📊 Document Analytics</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Views</th>
            <th>Created At</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(doc => (
            <tr key={doc.uuid}>
              <td>{doc.filename}</td>
              <td>{doc.views}</td>
              <td>{new Date(doc.createdAt).toLocaleString()}</td>
              <td>
                <a href={`https://pdf-tracker.onrender.com/view/${doc.uuid}`} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsDashboard;
