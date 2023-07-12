import Layout from '@/components/Layout'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Details from './Details'

const CryptoTransactionPage = () => {
  return (
    <Layout title="Transaction details" back>
      <div className="flex space-x-5 lg:block lg:space-x-0 lg:space-y-5">
        <div className="card flex flex-1 flex-col p-5">
          <div className="mb-6 flex items-center">
            <div className="mr-3 w-8 rounded-full text-0 dark:bg-white">
              <Image className="w-full dark:scale-105" src="/images/bitcoin.svg" width={28} height={28} alt="" />
            </div>
            <div className="mr-1 font-bold">Bitcoin</div>
          </div>
          <div className="text-h4">0.18712946 BTC</div>
          <div className="mb-6 text-sm font-medium text-n-3 dark:text-white/50">$6,849.81</div>
          <div className="mb-6 border-b border-dashed border-n-1 pb-6 text-sm dark:border-white">
            This transaction was first broadcast to the Bitcoin network on June 11, 2021 at 1:36 AM GMT+4. The
            transaction is currently unconfirmed by the network. At the time of this transaction, 0.18709284 BTC was
            sent with a value of $6,852.03. The current value of this transaction is now $6,848.47. Learn more about how
            transactions work.
          </div>
          <div className="mb-6 border-b border-dashed border-n-1 pb-6 dark:border-white">
            <div className="mb-2.5 flex items-center justify-between text-xs font-medium text-n-3 dark:text-white/50">
              <div>From</div>
              <div>0.18712946 BTC</div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="mr-6 truncate whitespace-nowrap font-medium">
                bc1qqnyq7yyse6cq3pkrrhr325l4ma4c4sc5m59yyv
              </div>
              <div className="font-bold">$6,598.61</div>
            </div>
            <button className="btn-stroke btn-small btn-square my-5">
              <Icon name="transfer" />
            </button>
            <div className="mb-2.5 flex items-center justify-between text-xs font-medium text-n-3 dark:text-white/50">
              <div>To</div>
              <div>0.18712932 BTC</div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="mr-6 truncate whitespace-nowrap font-medium">
                bc1qxwpjvsprw6ajhxnywfnrv2pug247k7uk5nkuy6
              </div>
              <div className="font-bold">$6,849.81</div>
            </div>
          </div>
          <div className="mb-10 md:mb-7">
            <div className="mb-2 text-xs font-medium text-n-3 dark:text-white/50">Fee</div>
            <div className="text-sm font-medium">
              <p>$2.35</p>
              <p>(17.212 sat/B - 7.661 sat/WU - 373 bytes)</p>
              <p>(30.571 sat/vByte - 210 virtual bytes</p>
            </div>
          </div>
          <button className="btn-stroke btn-small mt-auto w-full">
            <Icon name="repeat" />
            <span>Repeat transaction</span>
          </button>
        </div>
        <div className="flex-1">
          <Details />
        </div>
      </div>
    </Layout>
  )
}

export default CryptoTransactionPage
