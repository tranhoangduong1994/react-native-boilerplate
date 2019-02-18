export default {
  fn: {
    bw: val => ({
      borderWidth: Number(val)
    }),
    oh: () => ({
      overflow: 'hidden'
    }),
    whn: () => ({
      width: null,
      height: null
    }),
    wd: val => ({
      width: Number(val)
    }),
    hg: val => ({
      height: Number(val)
    }),
    sz: val => ({
      width: Number(val),
      height: Number(val)
    }),
    tc: val => ({
      color: val
    }),
    brs: val => ({
      borderRadius: Number(val)
    }),
    mtNeg: val => ({
      marginTop: -Number(val)
    }),
    z: val => ({
      zIndex: Number(val)
    }),
    bbw: val => ({
      borderBottomWidth: Number(val)
    })
  }
};
