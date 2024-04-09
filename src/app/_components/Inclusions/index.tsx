import Image from 'next/image'

import { inclusions } from '../../constants'
import { Gutter } from '../Gutter'

import classes from './index.module.scss'

export default function Inclusions() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 30,
      }}
    >
      <ul className={classes.inclusions}>
        {inclusions.map((inclusion, index) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <li
                key={inclusion.title}
                style={{
                  width: '50%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Image
                    src={inclusion.icon}
                    alt={inclusion.title}
                    width={36}
                    height={36}
                    className={classes.icon}
                  />
                  <h5 className={classes.title}>{inclusion.title}</h5>
                </div>
                <p>{inclusion.description}</p>
              </li>
            </div>
          )
        })}
      </ul>
    </section>
  )
}
