import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { mockKHSITFlow as rows } from '../../store/__mocks__/mockEdiAPI';

const headCells = [
  { id: 'EDI_NO', label: 'EDI_NO' },
  { id: 'EDI_ID', label: 'EDI_ID' },
  { id: 'EDI_FLOW_ID', label: 'EDI_FLOW_ID' },
  { id: 'DATA_DATE', label: 'DATA_DATE' },
  { id: 'STATUS_ID', label: 'STATUS_ID' },
  { id: 'RESULT_ID', label: 'RESULT_ID' },
  { id: 'DT_BEGIN', label: 'DT_BEGIN' },
  { id: 'DT_END', label: 'DT_END' }
];
// EDI_NO, EDI_ID, EDI_FLOW_ID, DATA_DATE, STATUS_ID, RESULT_ID, DT_BEGIN, DT_END
export default function FlowTable() {
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
                <TableCell key={headCell.id} align="center">
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* EDI_NO, EDI_ID, EDI_FLOW_ID, DATA_DATE, STATUS_ID, RESULT_ID, DT_BEGIN, DT_END */}
          {/* Table Body */}
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.EDI_NO}</TableCell>
                <TableCell align="center">{row.EDI_ID}</TableCell>
                <TableCell align="center">{row.EDI_FLOW_ID}</TableCell>
                <TableCell align="center">{row.DATA_DATE}</TableCell>
                <TableCell align="center">{row.STATUS_ID}</TableCell>
                <TableCell align="center">
                  <span
                    style={{
                      background: 'red',
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
                <TableCell align="center">{row.DT_BEGIN}</TableCell>
                <TableCell align="center">{row.DT_END}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
