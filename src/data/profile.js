export const profile = {
  name: 'abstract-333',
  role: 'Backend / Embedded Developer',
  availability: 'Open to Relocation · Remote (GMT+3)',
  github: 'https://github.com/abstract-333',
  objective:
    'Software Engineer with 3 years of experience in backend, DevOps, and embedded systems, seeking full-time backend or embedded roles.',

  skills: {
    technical: [
      'Python',
      'C++',
      'Arduino',
      'FastAPI',
      'Docker',
      'SQL',
      'CI/CD',
      'AI',
      'LLM',
      'RAG',
      'IoT',
      'PostgreSQL',
      'MariaDB',
      'MongoDB',
      'I2C',
      'Finite-State Machines',
    ],
    languages: ['English C1', 'Arabic', 'Russian', 'Ukrainian'],
  },

  experience: [
    {
      title: 'Embedded Developer',
      company: 'Elias Engineering Office',
      location: 'Latakia',
      period: 'Feb 2025 — Present',
      highlights: [
        'Developed Embedded C++ firmware for a 12V Battery Charge Controller featuring real-time monitoring and overcharge/deep-discharge protection.',
        'Developed C++ controller to restore Histokinette E7326 tissue processor using strict timing orchestration for motors, heaters, and sensors.',
        'Reduced heater run-time from 28 to 5 hours and automated power-loss recovery via optimized sensor validation.',
        'Built accelerated test mode that compressed 14-hour processing cycles to 3 minutes using custom time-scaling logic.',
      ],
    },
    {
      title: 'Open-Source Contributor',
      company: null,
      location: null,
      period: 'Jan 2025 — Present',
      highlights: [
        'EpicStaff: Reduced Docker image size by ~50% (≈11GB → 5.6GB) via multi-stage builds, significantly improving deployment efficiency and caching.',
        'Ipinfo: Improved Python dependency management using uv, reducing CI/CD execution time ~48%.',
        'Polar.sh: Fixed Windows build issues and improved onboarding documentation for contributors.',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'X-Star Tech',
      location: 'Latakia',
      period: 'Sep 2023 — Nov 2024',
      highlights: [
        'Developed a FastAPI backend implementing Onion Architecture and Unit of Work.',
        'Implemented authentication system using JWT and Argon2 password hashing.',
        'Reached a 99th percentile latency of 200 ms.',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Computer Science',
      school: 'Latakia University',
      period: '2019 — 2025',
      note: 'Diploma Project: LMS Moodle Alternative — Grade 95%',
    },
    {
      degree: 'Bachelor of Business Administration',
      school: 'Latakia University',
      period: '2021 — 2026',
      note: null,
    },
  ],
}
