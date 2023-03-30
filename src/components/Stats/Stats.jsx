import React from 'react'
import { NameTd, ProgressBar, ProgressBarTd, StatsTd, StatusBaseTable } from './Styled'

export default function Stats({stats}) {
  return (
    <StatusBaseTable>
        <tbody>
            {stats.map((stat, index)=>{
                return (
                    <tr key={index}>
                        <NameTd>{stat.name}</NameTd>
                        <StatsTd>{stat.base_stat}</StatsTd>
                        <ProgressBarTd>
                            <ProgressBar baseState={stat.base_stat}></ProgressBar>
                        </ProgressBarTd>
                    </tr>
                )
            })}
        </tbody>
    </StatusBaseTable>
  )
}
