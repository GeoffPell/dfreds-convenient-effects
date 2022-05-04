import Effect from './effect.js';
import Constants from '../constants.js';
import Settings from '../settings.js';


export default class RiftEffectDefinitions {
    get rift_conditions() {
        return [
            this._ITEM_BROKE,
      // this._OVEREXTENDED,
      // this._fatigued,
      // this._PULLED_MUSCLE,
      // this._ANKLE_TWIST,
      // this._KNEE_POP,
      // this._WRONG_STRAP,
      // this._STAGGERING_IN_PAIN,
      // this._BLINDED_BY_YOUR_OWN_BLOOD,

      // //
      // this._Drop_0_Bleeding_out,
      // this._Drop_0_stable,
      // this._Stunned_one_turn,
      // this._Major_system_shock,
      // this._System_shock,

      // //
      // this._KNOCKDOWN,
      // this._HAMSTRING,
      // this._TURN_THE_TIDE,
      // this._EYE_GOUGE,
      // this._FORCEFUL_BLOW,
      // this._STUNNING_BLOW,
      // this._PARRY,
      // this._GAPING_WOUND,
      // this._PRESSURE_POINT,
      // this._OPPORTUNITY,
      // this._KNOCKOUT_BLOW,
      // this._EVISCERATE,
      // this._DECAPITATION,
      // this._APPENDAGE_BLOW,
      // this._WRIST_BLOW,
      // this._MIGHTY_BLOW,
      // this._HEAD_BLOW,
      // this._KNEE_HIT,
      // this._BODY_BLOW,
      // this._SHOULDER_BLOW,

        ]
    }

    get _ITEM_BROKE(){
      return new Effect({
        name: 'ITEM BROKE',
        description:
          'ITEM BROKE',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        seconds: 20,
        turns: '1d4',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }


/* Rifts critical effects */
//   KNOCKDOWN
get _KNOCKDOWN(){
    return new Effect({
      name: 'KNOCKDOWN',
      description:
        'KNOCKDOWN',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   HAMSTRING
  get _HAMSTRING(){
    return new Effect({
      name: 'HAMSTRING',
      description:
        'HAMSTRING',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   TURN THE TIDE
  get _TURN_THE_TIDE(){
    return new Effect({
      name: 'TURN THE TIDE',
      description:
        'TURN THE TIDE',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   EYE GOUGE
  get _EYE_GOUGE(){
    return new Effect({
      name: 'EYE GOUGE',
      description:
        'EYE GOUGE',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   FORCEFUL BLOW
  get _FORCEFUL_BLOW(){
    return new Effect({
      name: 'FORCEFUL BLOW',
      description:
        'FORCEFUL BLOW',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   STUNNING BLOW
  get _STUNNING_BLOW(){
    return new Effect({
      name: 'STUNNING BLOW',
      description:
        'STUNNING BLOW',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   PARRY
  get _PARRY(){
    return new Effect({
      name: 'PARRY',
      description:
        'PARRY',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   GAPING WOUND
  get _GAPING_WOUND(){
    return new Effect({
      name: 'GAPING WOUND',
      description:
        'GAPING WOUND',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   PRESSURE POINT
  get _PRESSURE_POINT(){
    return new Effect({
      name: 'PRESSURE POINT',
      description:
        'PRESSURE POINT',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   OPPORTUNITY
  get _OPPORTUNITY(){
    return new Effect({
      name: 'OPPORTUNITY',
      description:
        'OPPORTUNITY',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   KNOCKOUT BLOW
  get _KNOCKOUT_BLOW(){
    return new Effect({
      name: 'KNOCKOUT BLOW',
      description:
        'KNOCKOUT BLOW',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   EVISCERATE
  get _EVISCERATE(){
    return new Effect({
      name: 'EVISCERATE',
      description:
        'EVISCERATE',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   DECAPITATION
  get _DECAPITATION(){
    return new Effect({
      name: 'DECAPITATION',
      description:
        'DECAPITATION',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   APPENDAGE BLOW
  get _APPENDAGE_BLOW(){
    return new Effect({
      name: 'APPENDAGE BLOW',
      description:
        'APPENDAGE BLOW',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   WRIST BLOW
  get _WRIST_BLOW(){
    return new Effect({
      name: 'WRIST BLOW',
      description:
        'WRIST BLOW',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   MIGHTY BLOW
  get _MIGHTY_BLOW(){
    return new Effect({
      name: 'MIGHTY BLOW',
      description:
        'MIGHTY BLOW',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   HEAD BLOW
  get _HEAD_BLOW(){
    return new Effect({
      name: 'HEAD BLOW',
      description:
        'HEAD BLOW',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   KNEE HIT
  get _KNEE_HIT(){
    return new Effect({
      name: 'KNEE HIT',
      description:
        'KNEE HIT',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   BODY BLOW
  get _BODY_BLOW(){
    return new Effect({
      name: 'BODY BLOW',
      description:
        'BODY BLOW',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   SHOULDER BLOW
  get _SHOULDER_BLOW(){
    return new Effect({
      name: 'SHOULDER BLOW',
      description:
        'SHOULDER BLOW',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  
  

  

/* Rifts Massive damage */
//   // --------------
//   Drop 0 Bleeding out
get _Drop_0_Bleeding_out(){
    return new Effect({
      name: 'Drop 0 Bleeding out',
      description:
        'Drop 0 Bleeding out',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   Drop 0 stable
  get _Drop_0_stable(){
    return new Effect({
      name: 'Drop 0 stable',
      description:
        'Drop 0 stable',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   Stunned one turn
  get _Stunned_one_turn(){
    return new Effect({
      name: 'Stunned one turn',
      description:
        'Stunned one turn',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      seconds: 20,
      turns: '1d4',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  //   Major system shock 
  get _Major_system_shock (){
    return new Effect({
      name: 'Major system shock',
      description:
        'Major system shock',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  
//   System shock 
get _System_shock(){
    return new Effect({
      name: 'System shock',
      description:
        'System shock',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }
  
  
    /* Rifts Effects */
    get _embarrassed(){
      return new Effect({
        name: 'Embarrassed',
        description:
          'You recieve a -2 penalty to attack rolls for 1d4 turns',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        seconds: 20,
        turns: '1d4',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }

    
  
    get _OVEREXTENDED(){
      return new Effect({
        name: 'OVEREXTENDED',
        description:
          '_OVEREXTENDED',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _fatigued(){
      return new Effect({
        name: 'Fatigued',
        description:
          'FATIGUED',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _PULLED_MUSCLE(){
      return new Effect({
        name: 'PULLED MUSCLE',
        description:
          'PULLED MUSCLE',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
  
    get _ANKLE_TWIST(){
      return new Effect({
        name: 'ANKLE TWIST',
        description:
          'ANKLE TWIST',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _KNEE_POP(){
      return new Effect({
        name: 'KNEE POP',
        description:
          'KNEE POP',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _WRONG_STRAP(){
      return new Effect({
        name: 'WRONG STRAP',
        description:
          'WRONG STRAP',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _STAGGERING_IN_PAIN(){
      return new Effect({
        name: 'STAGGERING IN PAIN',
        description:
          'STAGGERING IN PAIN',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
    get _BLINDED_BY_YOUR_OWN_BLOOD(){
      return new Effect({
        name: 'BLINDED BY YOUR OWN BLOOD',
        description:
          'BLINDED BY YOUR OWN BLOOD',
        icon: 'modules/dfreds-convenient-effects/images/prone.svg',
        changes: [
          {
            key: 'flags.midi-qol.disadvantage.attack.all',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '1',
          },
        ],
      });
    }
  
}