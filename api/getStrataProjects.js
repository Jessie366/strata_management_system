export default function handler(req, res) {
    
    if (req.method === 'GET') {
   
      const strataProjects = [
        {
          id: 1,
          name: 'Project Alpha',
          location: 'Sydney',
          status: 'In Progress',
        },
        {
          id: 2,
          name: 'Project Beta',
          location: 'Melbourne',
          status: 'Completed',
        },
        {
          id: 3,
          name: 'Project Gamma',
          location: 'Brisbane',
          status: 'Planning',
        },
      ];
  
      res.status(200).json(strataProjects);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  