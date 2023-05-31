import {useEffect, useState} from 'react';
import TableRow from './TableRow';
import DropdownIndicatorIcon from '../DropdownIndicatorIcon';

const Table = () => {
  const [userRankingData, setUserRankingData] = useState([]);
  const [sortedUserRankingData, setSortedUserRankingData] = useState([]);
  const [asc, setAsc] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserRankingData = async () => {
      setLoading(true);
      const response = await fetch(
        'https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users'
      );
      const userData = await response.json();
      setUserRankingData(userData);
      sortUserRankingData(userData);
      setLoading(false);
    };

    fetchUserRankingData();
  }, []);

  const sortUserRankingData = usersData => {
    const temp = [...usersData];
    temp.sort((a, b) => (asc ? a.score - b.score : b.score - a.score));
    console.log(temp);
    setSortedUserRankingData(temp);
    setAsc(!asc);
  };

  return (
    <section class='mt-20'>
      <div class='flex justify-center items-center'>
        {loading || (userRankingData?.length ?? 0) <= 0 ? (
          <div className='w-full h-20 flex justify-center items-center'>
            Loading...
          </div>
        ) : (
          <table class='w-2/3 max-auto'>
            <thead class='bg-sky-100'>
              <tr class=''>
                <th class='p-3 text-start'>Id</th>
                <th class='p-3 text-start'>Name</th>
                <th class='p-3 text-start'>Country</th>
                <th
                  onClick={() => sortUserRankingData(userRankingData)}
                  id='score_column'
                  class='flex justify-start items-center gap-4 p-3 text-start cursor-pointer'>
                  <span>Score</span>
                  <DropdownIndicatorIcon
                    className={`${!asc ? '' : 'rotate-180'}`}
                  />
                </th>
              </tr>
            </thead>
            <tbody id='table_body'>
              {sortedUserRankingData?.map((userData, index) => {
                return (
                  <TableRow key={index} index={index} userData={userData} />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Table;
