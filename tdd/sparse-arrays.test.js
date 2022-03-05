import {seEsperaQue, esteTeste} from '../teste-sem-pantim/suite.js'
import matchingStrings from '../src/hackerrank/sparse-arrays.js'

esteTeste(' TESTE FINAL [2,1,0]',
  () => {
    let strings = ['aba','baba','aba','xzxb']
    let queries = ['aba', 'xzxb','ab']
    seEsperaQue(matchingStrings(strings,queries)).seja('[2,1,0]')
  })
