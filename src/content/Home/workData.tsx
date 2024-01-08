import { ReactNode } from "react";

export type Work = {
  organisation: {
    name: string;
    logo: string;
  };
  positions: Position[];
};

export type Position = {
  title: string;
  startDate: Date;
  endDate?: Date;
  body?: (string | ReactNode)[] | string | ReactNode;
};

export const work: Work[] = [
  {
    organisation: {
      name: "Cornell University",
      logo: "https://brand.tech.cornell.edu/wp-content/uploads/2022/06/Twisted-T-Outline-Lockup-Cornell-Red-1.png",
    },
    positions: [
      {
        title: "Teaching Assistant for ORIE 5380: Optimization Methods",
        startDate: new Date(2023, 7),
        endDate: new Date(2023, 11),
      },
      {
        title: "Teaching Assistant for CS 5356: Building Startup Systems",
        startDate: new Date(2023, 0),
        endDate: new Date(2023, 4),
      },
      {
        title:
          "Teaching Assistant for ECE 5260: Graph-based Data Science for Networked Systems",
        startDate: new Date(2022, 7),
        endDate: new Date(2022, 11),
      },
      {
        title: "Graduate Research Assistant",
        startDate: new Date(2021, 7),
        body: (
          <ul>
            <li>
              Played a central role in the execution of “Provable Anonymization
              of Grid Data for Cyberattack Detection”, a research initiative
              funded by the Department of Energy as the primary student
              researcher, collaborating closely with my advisor and LBNL.
            </li>
            <li>
              Oversaw data collection, analysis, and reporting, generating
              critical findings that significantly advanced the project&apos;s
              objectives.
            </li>
            <li>
              Led innovative research initiatives within the project, including
              the development of
            </li>
            <ul>
              <li>
                Differential private (DP) clustering algorithm for consumer
                classification and typical load shape generation
              </li>
              <li>
                DP cyber-physical attack detection methodology for SCADA
                systems, and
              </li>
              <li>
                DP approach for inferring solar PV metadata and forecasting from
                large-scale consumer energy usage datasets.
              </li>
            </ul>
          </ul>
        ),
      },
    ],
  },
  {
    organisation: {
      name: "Kevala, Inc.",
      logo: "https://assets.themuse.com/uploaded/companies/12281/small_logo.png",
    },
    positions: [
      {
        title: "Data Science Intern",
        startDate: new Date(2021, 4),
        endDate: new Date(2021, 7),
        body: [
          "Developed a deep reinforcement learning-based tool on GCP Vertex AI to maximize batteries and plug-in electric vehicles' electricity price arbitrage value via charge schedule optimization, based on electricity price, solar irradiation, and load forecasts.",
          "Built a pipeline to ingest day-ahead and real-time market electricity prices into Google BigQuery.",
          "Developed a methodology to estimate carbon social prices for feeder-level electricity generation.",
          "Created data visualization dashboards using Streamlit, translating complex data sets into comprehensive visual representations.",
          "Researched and published an internal blog on the use of racial features in BESS adoption models.",
        ],
      },
    ],
  },
  {
    organisation: {
      name: "Lawrence Berkeley National Laboratory",
      logo: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/BerkeleyLab_sq.png",
    },
    positions: [
      {
        title: "Research Intern",
        startDate: new Date(2020, 4),
        endDate: new Date(2020, 7),
        body: [
          "Developed a pipeline to ingest and clean large time-series AMI data of an electric ISO's consumers onto a PostgreSQL database.",
          "Designed algorithms to publish differentially private summary statistics about consumer energy data.",
          "Proposed a differentially private clustering algorithm to classify consumers and generate typical average load shapes of houses.",
          "Developed a differential privatized cyber-physical attack detection methodology for SCADA systems.",
        ],
      },
    ],
  },
  {
    organisation: {
      name: "Arizona State University",
      logo: "https://1000logos.net/wp-content/uploads/2021/04/ASU-logo.png",
    },
    positions: [
      {
        title: "Graduate Research Assistant",
        startDate: new Date(2017, 7),
        endDate: new Date(2021, 7),
        body: [
          "Designed the Electron Volt Exchange, a secure Hyperledger Fabric-based distributed ledger for Transactive Energy.",
          "Proposed a distributed optimization algorithm to verify users' compliance with power schedules and to mitigate the impact of false data injection.",
          "Developed gradient-based edge-cutting mechanisms to build Byzantine fault-tolerant decentralized optimization algorithms.",
          "Designed an algorithm to infer socioeconomic preference from crowd movement dynamics data.",
          "Managed the SINE Lab's compute resource cluster including VM management, networking, and administration.",
        ],
      },
    ],
  },
];
