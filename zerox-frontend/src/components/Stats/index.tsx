import { Battery0Icon, Battery100Icon, BoltIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, TruckIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Stats({truckCount, chargedTruckCount, chargingStationCount}) {

  const stats = [
    { id: 1, name: 'Trucks uncharged', stat: truckCount, icon: TruckIcon, subIcon: Battery0Icon, change: '0%', changeType: 'decrease' },
    { id: 2, name: 'Trucks full-charged', stat: chargedTruckCount, icon: TruckIcon, subIcon: Battery100Icon, change: '100%', changeType: 'increase' },
    { id: 4, name: 'Trucks on charge', stat: (10 - chargingStationCount), icon: TruckIcon,subIcon: BoltIcon, change: '', changeType: 'increase' },
    { id: 3, name: 'Available dock slot', stat: chargingStationCount, icon: BoltIcon,subIcon: BoltIcon, change: '', changeType: 'increase' },
  ]

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <item.subIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <item.subIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
