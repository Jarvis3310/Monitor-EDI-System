import { Box,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { mockEdiJob as rows } from '../../store/__mocks__/mockEdiJob';

const headCells = [
    { id: 'EDI_NO', label: 'EDI_NO' },
    { id: 'EDI_JOB_NO', label: 'EDI_JOB_NO' },
    { id: 'EDI_JOB_ID', label: 'EDI_JOB_ID' },
    { id: 'EDI_JOB_TYPE', label: 'EDI_JOB_TYPE' },
    { id: 'EDI_DEP_JOB_ID', label: 'EDI_DEP_JOB_ID' },
    { id: 'STATUS_ID', label: 'STATUS_ID' },
    { id: 'RESULT_ID', label: 'RESULT_ID' },
];

export default function APITable() {
  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id} align="left">
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">{row.EDI_NO}</TableCell>
                <TableCell align="left">{row.EDI_JOB_NO}</TableCell>
                <TableCell align="left">{row.EDI_JOB_ID}</TableCell>
                <TableCell align="left">{row.EDI_JOB_TYPE}</TableCell>
                <TableCell align="left">{row.EDI_DEP_JOB_ID}</TableCell>
                <TableCell align="left">{row.STATUS_ID}</TableCell>
                <TableCell align="left">
                  <span 
                      style={{
                          display: 'inline-block',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          marginRight: '8px',
                          backgroundColor: row.RESULT_ID === 'F' ? '#ff4d4f' : row.RESULT_ID === 'S' ? '#52c41a' : 'transparent'
                      }}
                  ></span>
                  {row.RESULT_ID}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
