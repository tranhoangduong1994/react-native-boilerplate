export default {
  fn: {
    bw: val => ({
      borderWidth: Number(val)
    }),
    oh: () => ({
      overflow: 'hidden'
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
    z: val => ({
      zIndex: Number(val)
    }),
    bbw: val => ({
      borderBottomWidth: Number(val)
    }),
    pan: val => ({
      padding: Number(val)
    }),
    phn: val => ({
      paddingHorizontal: Number(val)
    }),
    pvn: val => ({
      paddingVertical: Number(val)
    }),
    ptn: val => ({
      paddingTop: Number(val)
    }),
    pbn: val => ({
      paddingBottom: Number(val)
    }),
    pln: val => ({
      paddingLeft: Number(val)
    }),
    prn: val => ({
      paddingRight: Number(val)
    }),
    man: val => ({
      margin: Number(val)
    }),
    mhn: val => ({
      marginHorizontal: Number(val)
    }),
    mvn: val => ({
      marginVertical: Number(val)
    }),
    mtn: val => ({
      marginTop: Number(val)
    }),
    mbn: val => ({
      marginBottom: Number(val)
    }),
    mln: val => ({
      marginLeft: Number(val)
    }),
    mrn: val => ({
      marginRight: Number(val)
    })
  }
};
