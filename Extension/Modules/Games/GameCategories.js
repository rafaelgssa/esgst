_MODULES.push({
    description: `
      <ul>
        <li>Adds tags (which are called "categories" not to be confused with [id=gt]) below a game's name (in any page) that can display a lot of useful information about the game (depending on which categories you have enabled).</li>
        <li>The categories can be reordered by dragging and dropping them. You can also drag and drop them between a giveaway's columns (where the end/start times and the creator's username are).</li>
      </ul>
    `,
    features: {
      gc_lr: {
        description: `
          <ul>
            <li>With this option enabled, the categories will take a lot longer to load (when they are not already in the cache) because the requests will be sequential (the next game will only be requested when the current game has finished requesting) and limited to 200ms per request globally (across all open tabs).</li>
            <li>With this option disabled, all of the requests happen at the same time, which is a lot faster, but can get you easily blocked from the Steam store for an hour or so if you use the feature too much in a short period of time.</li>
          </ul>
        `,
        name: `Limit requests to the Steam store.`,
        sg: true
      },
      gc_rt: {
        description: `
          <ul>
            <li>Normally the categories only appear in the page after all requests have been made (meaning they all appear in the page at the same time). With this option enabled, the categories will appear as they are requested, so they appear in different times for each game.</li>
          </ul>
        `,
        name: `Show categories in real time.`,
        sg: true
      },
      gc_lp: {
        description: `
          <ul>
            <li>"Achievements" links to the <a href="http://steamcommunity.com/stats">http://steamcommunity.com/stats</a> page of the game.</li>
            <li>"Full CV", "Reduced CV" and "No CV" link to the <a href="https://www.steamgifts.com/bundle-games">https://www.steamgifts.com/bundle-games</a> page of the game.</li>
            <li>"Giveaway Info" links to your profile page.</li>
            <li>"Hidden" links to the <a href="https://www.steamgifts.com/account/settings/giveaways/filters">https://www.steamgifts.com/account/settings/giveaways/filters</a> page of the game.</li>
            <li>"Owned" links to the <a href="https://www.steamgifts.com/account/steam/games">https://www.steamgifts.com/account/steam/games</a> page of the game.</li>
            <li>"Removed" links to the <a href="http://steamdb.info">http://steamdb.info</a> page of the game.</li>
            <li>"Trading Cards" links to the <a href="http://www.steamcardexchange.net/index.php">http://www.steamcardexchange.net/index.php</a> page of the game.</li>
            <li>"Wishlist" links to the <a href="https://www.steamgifts.com/account/steam/wishlist">https://www.steamgifts.com/account/steam/wishlist</a> page of the game.</li>
            <li>Every other category links to the <a href="http://store.steampowered.com">http://store.steampowered.com</a> page of the game.</li>
          </ul>
        `,
        features: {
          gc_lp_gv: {
            name: `Enable for Grid View.`,
            sg: true
          }
        },
        name: `Link each category to its related page.`,
        sg: true
      },
      gc_b: {
        name: `Show the category colors as a bottom border to the giveaways in Grid View.`,
        sg: true
      },
      gc_il: {
        name: `Show the panel inline (next to the game's name instead of below it).`,
        sg: true
      },
      gc_a: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game has achievements.</li>
            <li>If you hover over the category, it shows how many achievements the game has.</li>
          </ul>
        `,
        features: {
          gc_a_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_a_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Achievements`,
        sg: true
      },
      gc_dlc: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game is a DLC.</li>
          </ul>
        `,
        features: {
          gc_dlc_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_dlc_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          },
          gc_dlc_b: {
            description: `
              <ul>
                <li>The icon <i class="fa fa-certificate"></i> will be added if the base is free, the icon <i class="fa fa-dollar"></i> will be added if it is not, and no icon will be added if the information is unavailable.</li>
              </ul>
            `,
            name: `Indicate if the base game of the DLC is free.`,
            sg: true
          },
          gc_dlc_o: {
            description: `
              <ul>
                <li>The same icon you use for the Owned category will be added if the base is owned.</li>
              </ul>
            `,
            name: `Indicate if the base game of the DLC is owned.`,
            sg: true
          }
        },
        input: true,
        name: `DLC`,
        sg: true
      },
      gc_ea: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game is in early access.</li>
          </ul>
        `,
        features: {
          gc_ea_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_ea_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Early Access`,
        sg: true
      },
      gc_fcv: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game gives full CV when given away.</li>
          </ul>
        `,
        features: {
          gc_fcv_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_fcv_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Full CV`,
        sg: true
      },
      gc_g: {
        colors: true,
        description: `
          <ul>
            <li>Shows the official genres of the game.</li>
            <li>The genres/user-defined tags are listed in the same category, separated by a comma. If they exceed a certain width, a "..." is added and the rest is hidden (they can be seen by hovering over the category).</li>
          </ul>
        `,
        features: {
          gc_g_s: {
            description: `
              <ul>
                <li>With this option enabled, each genre/user-defined tag will have its own category instead of all of them being listed in the same one.</li>
                <li>This option allows each separate category to be colored individually.</li>
              </ul>
            `,
            name: `Show each genre/user-defined tag as a separate category.`,
            sg: true
          },
          gc_g_udt: {
            description: `
              <ul>
                <li>Shows the user-defined tags that the game has in addition to the official genres.</li>
              </ul>
            `,
            name: `User-Defined Tags`,
            sg: true
          }
        },
        name: `Genres`,
        sg: true
      },
      gc_gi: {
        colors: true,
        description: `
          <ul>
            <li>Shows how many giveaways you have already made for the game and how much real CV you should get for a new giveaway.</li>
          </ul>
        `,
        name: `Giveaway Info`,
        sg: true
      },
      gc_h: {
        colors: true,
        description: `
          <ul>
            <li>Shows if you have hidden the game on SteamGifts.</li>
          </ul>
        `,
        features: {
          gc_h_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_h_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Hidden`,
        sg: true
      },
      gc_hltb: {
        colors: true,
        description: `
          <ul>
            <li>Shows how long it takes on average to beat the game based on HowLongToBeat.</li>
          </ul>
        `,        
        options: [{
          title: `For singleplayer games, show:`,
          values: [`Main Story`, `Main + Extra`, `Completionist`]
        }, {
          title: `For multiplayer games, show:`,
          values: [`Co-Op`, `Vs.`]
        }, {
          title: `For singleplayer/multiplayer games, show:`,
          values: [`Solo`, `Co-Op`, `Vs.`]
        }],
        name: `HLTB`,
        sg: true,
        sync: `HLTB Times`
      },
      gc_i: {
        colors: true,
        description: `
          <ul>
            <li>Shows if you have ignored the game on Steam.</li>
          </ul>
        `,
        features: {
          gc_i_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_i_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Ignored`,
        sg: true
      },
      gc_lg: {
        colors: true,
        description: `
          <ul>
            <li>Shows if Steam is learning about the game.</li>
          </ul>
        `,
        features: {
          gc_lg_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_lg_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Learning`,
        sg: true
      },
      gc_l: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game is compatible with Linux.</li>
          </ul>
        `,
        features: {
          gc_l_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_l_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Linux`,
        sg: true
      },
      gc_m: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game is compatible with Mac.</li>
          </ul>
        `,
        features: {
          gc_m_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_m_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Mac`,
        sg: true
      },
      gc_mp: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game is multiplayer.</li>
          </ul>
        `,
        features: {
          gc_mp_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_mp_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Multiplayer`,
        sg: true
      },
      gc_ncv: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game gives no CV when given away.</li>
            <li>If you hover over the category, it shows the date since it gives no CV.</li>
          </ul>
        `,
        features: {
          gc_ncv_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_ncv_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          },
          gc_ncv_o: {
            name: `Only display "No CV" if the game also has "Reduced CV".`,
            sg: true
          }
        },
        input: true,
        name: `No CV`,
        sg: true
      },
      gc_o: {
        colors: true,
        description: `
          <ul>
            <li>Shows if you own the game.</li>
          </ul>
        `,
        features: {
          gc_o_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_o_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          },
          gc_o_a: {
            name: `Show if you own the game in any of your alt accounts.`,
            sg: true
          }
        },
        input: true,
        name: `Owned`,
        sg: true
      },
      gc_p: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game is a package.</li>
            <li>If you hover over the category, it shows how many items are contained in the package.</li>
          </ul>
        `,
        features: {
          gc_p_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_p_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Package`,
        sg: true
      },
      gc_pw: {
        colors: true,
        description: `
          <ul>
            <li>Shows if you have previously won the game.</li>
          </ul>
        `,
        features: {
          gc_pw_o: {
            name: `Do not show if the game already has the Owned category.`,
            sg: true
          },
          gc_pw_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_pw_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Previously Won`,
        sg: true
      },
      gc_r: {
        description: `
          <ul>
            <li>Shows the overall rating that the game has on Steam.</li>
          </ul>
        `,
        features: {
          gc_r_s: {
            name: `Show the percentage and number of reviews next to the icon.`,
            sg: true
          }
        },
        name: `Rating`,
        sg: true
      },
      gc_rcv: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game gives reduced CV when given away.</li>
            <li>If you hover over the category, it shows the date since it gives reduced CV.</li>
          </ul>
        `,
        features: {
          gc_rcv_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_rcv_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Reduced CV`,
        sg: {include: [{enabled: 1, pattern: `.*`}], exclude: [{enabled: 1, pattern: `^/bundle-games`}]}
      },
      gc_rd: {
        description: `
          <ul>
            <li>Shows the release date of the game.</li>
            <li>If the game has no release date, a "?" will be shown instead.</li>
          </ul>
        `,
        colors: true,
        input: true,
        name: `Release Date`,
        sg: true
      },
      gc_rm: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game has been removed from the Steam store.</li>
          </ul>
        `,
        features: {
          gc_rm_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_rm_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Removed`,
        sg: true
      },
      gc_sp: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game is singleplayer.</li>
          </ul>
        `,
        features: {
          gc_sp_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_sp_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Singleplayer`,
        sg: true
      },
      gc_sc: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game has Steam Cloud.</li>
          </ul>
        `,
        features: {
          gc_sc_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_sc_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Steam Cloud`,
        sg: true
      },
      gc_tc: {
        colors: true,
        description: `
          <ul>
            <li>Shows if the game has trading cards.</li>
          </ul>
        `,
        features: {
          gc_tc_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_tc_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Trading Cards`,
        sg: true
      },
      gc_w: {
        colors: true,
        description: `
          <ul>
            <li>Shows if you have wishlisted the game on Steam.</li>
            <li>If you hover over the category, it shows the date when you added the game to your wishlist.</li>
          </ul>
        `,
        features: {
          gc_w_s: {
            description: `
              <ul>
                <li>Shows the category initials instead of its full name.</li>
                <li>Not compatible with custom labels.</li>
              </ul>
            `,
            features: {
              gc_w_s_i: {
                name: `Use icons instead of initials.`,
                sg: true
              }
            },
            name: `Enable the simplified version.`,
            sg: true
          }
        },
        input: true,
        name: `Wishlisted`,
        sg: true
      }
    },
    id: `gc`,
    load: gc,
    name: `Game Categories`,
    sg: true,
    sync: `Hidden Games, Owned/Wishlisted/Ignored Games, Reduced CV Games, No CV Games and Giveaways`,
    type: `games`
  });

  function gc() {    
    if (!esgst.menuPath || esgst.gbPath || esgst.gedPath || esgst.gePath) {
      esgst.gameFeatures.push(gc_games);
    }
  }

  function gc_games(games, main, source, endless) {
    gc_getGames(games, main, source, endless);
  }

  async function gc_getGames(games, main, source, endless) {
    let gc = {
      apps: Object.keys(games.apps).map(x => parseInt(x)),
      cache: {
        apps: {},
        subs: {}
      },
      subs: Object.keys(games.subs).map(x => parseInt(x))
    };

    // get categories
    for (let id in games.apps) {
      let elements = games.apps[id];
      for (let i = 0, n = elements.length; i < n; ++i) {
        let element = elements[i];
        if (element.container.getElementsByClassName(`esgst-gc-panel`)[0]) {
          continue;
        }
        if (element.container.closest(`.poll`)) {
          createElements(element.container.getElementsByClassName(`table__column__heading`)[0], `afterEnd`, [{
            attributes: {
              class: `esgst-gc-panel`
            },
            type: `div`
          }]);
        } else {
          createElements(element.heading, `afterEnd`, [{
            attributes: {
              class: `esgst-gc-panel`
            },
            type: `div`
          }]);
        }
      }
    }
    for (let id in games.subs) {
      let elements = games.subs[id];
      for (let i = 0, n = elements.length; i < n; ++i) {
        let element = elements[i];
        if (element.container.getElementsByClassName(`esgst-gc-panel`)[0]) {
          continue;
        }
        if (element.container.closest(`.poll`)) {
          createElements(element.container.getElementsByClassName(`table__column__heading`)[0], `afterEnd`, [{
            attributes: {
              class: `esgst-gc-panel`
            },
            type: `div`
          }]);
        } else {
          createElements(element.heading, `afterEnd`, [{
            attributes: {
              class: `esgst-gc-panel`
            },
            type: `div`
          }]);
        }
      }
    }
    const missingApps = [];
    const missingSubs = [];
    if (esgst.gc_gi || esgst.gc_lg || esgst.gc_r || esgst.gc_a || esgst.gc_sp || esgst.gc_mp || esgst.gc_sc || esgst.gc_tc || esgst.gc_l || esgst.gc_m || esgst.gc_dlc || esgst.gc_ea || esgst.gc_rm || esgst.gc_rd || esgst.gc_g || esgst.gc_p) {
      gc.cache = JSON.parse(getLocalValue(`gcCache`, `{ "apps": {}, "subs": {}, "hltb": {}, "timestamp": 0, "version": 6 }`));
      if (gc.cache.version !== 6) {
        gc.cache = {
          apps: {},
          subs: {},
          hltb: gc.cache.hltb,
          timestamp: 0,
          version: 6
        };
      }
      if (!gc.cache.hltb) {
        gc.cache.hltb = {};
      }
      const currentTime = Date.now();
      for (let id in gc.cache.apps) {
        if (gc.cache.apps[id].lastCheck) {
          if (currentTime - gc.cache.apps[id].lastCheck > 604800000 || ((gc.cache.apps[id].price === -1 || (esgst.gc_g_udt && !gc.cache.apps[id].tags) || (esgst.gc_r && !gc.cache.apps[id].rating) || (esgst.gc_rd && gc.cache.apps[id].removed === -1)) && currentTime - gc.cache.apps[id].lastCheck > 86400000)) {
            delete gc.cache.apps[id];
          }
        } else {
          gc.cache.apps[id].lastCheck = currentTime;
        }
      }
      for (let id in gc.cache.subs) {
        if (gc.cache.subs[id].lastCheck) {
          if (currentTime - gc.cache.subs[id].lastCheck > 604800000 || ((gc.cache.subs[id].price === -1 || (esgst.gc_rd && gc.cache.subs[id].removed === -1)) && currentTime - gc.cache.subs[id].lastCheck > 86400000)) {
            delete gc.cache.subs[id];
          }
        } else {
          gc.cache.subs[id].lastCheck = currentTime;
        }
      }
      setLocalValue(`gcCache`, JSON.stringify(gc.cache));
      for (let i = 0, n = gc.apps.length; i < n; ++i) {
        let id = gc.apps[i];
        if (gc.cache.apps[id] && gc.cache.apps[id].name) {
          continue;
        }
        missingApps.push(id);
      }
      for (let i = 0, n = gc.subs.length; i < n; ++i) {
        let id = gc.subs[i];
        if (gc.cache.subs[id] && gc.cache.subs[id].name) {
          continue;
        }
        missingSubs.push(id);
      }
      let numApps = missingApps.length;
      let numSubs = missingSubs.length;
      if (numApps || numSubs) {
        let promises = [];
        for (let i = 0, n = missingApps.length; i < n; ++i) {
          if (esgst.gc_lr) {
            await gc_getCategories(gc, currentTime, games, missingApps[i], `apps`);
          } else {
            promises.push(gc_getCategories(gc, currentTime, games, missingApps[i], `apps`));
          }
        }
        for (let i = 0, n = missingSubs.length; i < n; ++i) {
          if (esgst.gc_lr) {
            await gc_getCategories(gc, currentTime, games, missingSubs[i], `subs`);
          } else {
            promises.push(gc_getCategories(gc, currentTime, games, missingSubs[i], `subs`));
          }
        }
        await Promise.all(promises);
        await lockAndSaveGames(esgst.games);
        setLocalValue(`gcCache`, JSON.stringify(gc.cache));
      }
    }

    // add categories
    for (const id of gc.apps) {
      if (missingApps.indexOf(id) > -1 && esgst.gc_rt) {
        continue;
      }
      gc_addCategory(gc.cache.apps[id], games.apps[id], id, esgst.games.apps[id], `apps`, gc.cache.hltb);
    }
    for (const id of gc.subs) {
      if (missingSubs.indexOf(id) > -1 && esgst.gc_rt) {
        continue;
      }
      gc_addCategory(gc.cache.subs[id], games.subs[id], id, esgst.games.subs[id], `subs`);
    }
    let categories = [`achievements`, `dlc`, `dlcOwned`, `dlcFree`, `dlcNonFree`, `genres`, `hltb`, `linux`, `mac`, `singleplayer`, `multiplayer`, `package`, `rating`, `learning`, `removed`, `steamCloud`, `tradingCards`, `earlyAccess`, `releaseDate`];
    for (let i = 0, n = esgst.mainGiveaways.length; i < n; ++i) {
      let giveaway = esgst.mainGiveaways[i];
      if (giveaway.gcReady || !giveaway.outerWrap.querySelector(`[data-gcReady]`)) {
        continue;
      }
      for (let j = 0, numCategories = categories.length; j < numCategories; ++j) {
        let id = categories[j];
        let category = giveaway.outerWrap.getElementsByClassName(`esgst-gc-${id}`)[0];
        if (category) {
          if (id === `releaseDate`) {
            giveaway.releaseDate = category.getAttribute(`data-timestamp`);
            if (giveaway.releaseDate === `?`) {
              giveaway.releaseDate = -1;
            } else {
              giveaway.releaseDate = parseInt(giveaway.releaseDate) * 1e3;
            }
          } else if (id === `genres`) {
            giveaway.genres = category.textContent.toLowerCase().trim().replace(/\s{2,}/g, `, `).split(/,\s/);
          } else if (id === `rating`) {
            giveaway.rating = parseInt(category.title.match(/(\d+)%/)[1]);
          } else {
            giveaway[id] = true;
          }
        } else if (id === `rating`) {
          giveaway.rating = -1;
        } else if (id === `releaseDate`) {
          giveaway.releaseDate = -1;
        }
      }
      if (giveaway.grid && esgst.gc_b) {
        let borders = createElements(giveaway.outerWrap, `beforeEnd`, [{
          attributes: {
            class: `esgst-gc-border`
          },
          type: `div`
        }]);
        let categoryNames = {
          gc_fcv: `fullCV`,
          gc_rcv: `reducedCV`,
          gc_ncv: `noCV`,
          gc_h: `hidden`,
          gc_i: `ignored`,
          gc_o: `owned`,
          gc_w: `wishlisted`,
          gc_pw: `won`,
          gc_a: `achievements`,
          gc_sp: `singleplayer`,
          gc_mp: `multiplayer`,
          gc_sc: `steamCloud`,
          gc_tc: `tradingCards`,
          gc_l: `linux`,
          gc_m: `mac`,
          gc_ea: `earlyAccess`,
          gc_lg: `learning`,
          gc_rm: `removed`,
          gc_dlc: `dlc`,
          gc_p: `package`
        };
        esgst.gc_categories_gv.forEach(category => {
          if (categoryNames[category] && giveaway.innerWrap.getElementsByClassName(`esgst-gc-${categoryNames[category]}`)[0]) {
            createElements(borders, `beforeEnd`, [{
              attributes: {
                class: `esgst-gc-${categoryNames[category]}`
              },
              type: `div`
            }]);
          }
        });
      }
      giveaway.gcReady = true;
    }
    for (let i = 0, n = esgst.popupGiveaways.length; i < n; ++i) {
      let giveaway = esgst.popupGiveaways[i];
      if (giveaway.gcReady || !giveaway.outerWrap.querySelector(`[data-gcReady]`)) {
        continue;
      }
      for (let j = 0, numCategories = categories.length; j < numCategories; ++j) {
        let id = categories[j];
        let category = giveaway.outerWrap.getElementsByClassName(`esgst-gc-${id}`)[0];
        if (category) {
          if (id === `genres`) {
            giveaway.genres = category.textContent.toLowerCase().trim().replace(/\s{2,}/g, `, `).split(/,\s/);
          } else if (id === `rating`) {
            giveaway.rating = parseInt(category.title.match(/(\d+)%/)[1]);
          } else {
            giveaway[id] = true;
          }
        } else if (id === `rating`) {
          giveaway.rating = 0;
        }
      }
      if (giveaway.grid && esgst.gc_b) {
        let borders = createElements(giveaway.outerWrap, `beforeEnd`, [{
          attributes: {
            class: `esgst-gc-border`
          },
          type: `div`
        }]);
        let categoryNames = {
          gc_fcv: `fullCV`,
          gc_rcv: `reducedCV`,
          gc_ncv: `noCV`,
          gc_h: `hidden`,
          gc_i: `ignored`,
          gc_o: `owned`,
          gc_w: `wishlisted`,
          gc_pw: `won`,
          gc_a: `achievements`,
          gc_sp: `singleplayer`,
          gc_mp: `multiplayer`,
          gc_sc: `steamCloud`,
          gc_tc: `tradingCards`,
          gc_l: `linux`,
          gc_m: `mac`,
          gc_ea: `earlyAccess`,
          gc_lg: `learning`,
          gc_rm: `removed`,
          gc_dlc: `dlc`,
          gc_p: `package`
        };
        esgst.gc_categories_gv.forEach(category => {
          if (categoryNames[category] && giveaway.innerWrap.getElementsByClassName(`esgst-gc-${categoryNames[category]}`)[0]) {
            createElements(borders, `beforeEnd`, [{
              attributes: {
                class: `esgst-gc-${categoryNames[category]}`
              },
              type: `div`
            }]);
          }
        });
      }
      giveaway.gcReady = true;
    }
    if (esgst.gf && esgst.gf.filteredCount && esgst[`gf_enable${esgst.gf.type}`]) {
      filters_filter(esgst.gf, false, endless);
    }
    if (esgst.gfPopup && esgst.gfPopup.filteredCount && esgst[`gf_enable${esgst.gfPopup.type}`]) {
      filters_filter(esgst.gfPopup);
    }
  }

  async function gc_getCategories(gc, currentTime, games, id, type) {
    try {
      let categories = {
        achievements: 0,
        dlc: 0,
        earlyAccess: 0,
        genres: ``,
        lastCheck: currentTime,
        learning: 0,
        linux: 0,
        mac: 0,
        multiplayer: 0,
        name: ``,
        price: -1,
        rating: ``,
        ratingType: ``,
        releaseDate: `?`,
        removed: -1,
        singleplayer: 0,
        steamCloud: 0,
        tags: ``,
        tradingCards: 0
      };
      let responseJson = JSON.parse((await request({method: `GET`, notLimited: !esgst.gc_lr, url: `http://store.steampowered.com/api/${type === `apps` ? `appdetails?appids=` : `packagedetails?packageids=`}${id}&filters=achievements,apps,basic,categories,genres,name,packages,platforms,price,price_overview,release_date&cc=us&l=en`})).responseText);
      let data;
      if (responseJson && responseJson[id]) {
        data = responseJson[id].data;
        if (data) {
          if (type === `apps` && data.packages) {
            if (!esgst.games.apps[id]) {
              esgst.games.apps[id] = {};
            }
            esgst.games.apps[id].packages = data.packages.map(x => parseInt(x));
          }
          if (type === `subs` && data.apps) {
            if (!esgst.games.subs[id]) {
              esgst.games.subs[id] = {};
            }
            esgst.games.subs[id].apps = data.apps.map(x => parseInt(x.id));
          }
          if (data.categories) {
            for (let i = 0, n = data.categories.length; i < n; ++i) {
              switch (data.categories[i].description.toLowerCase()) {
                case `steam achievements`:
                  categories.achievements = 1;
                  break;
                case `single-player`:
                  categories.singleplayer = 1;
                  break;
                case `multi-player`:
                case `online multi-player`:
                case `co-op`:
                case `local co-op`:
                case `online co-op`:
                case `shared/split screen`:
                  categories.multiplayer = 1;
                  break;
                case `steam cloud`:
                  categories.steamCloud = 1;
                  break;
                case `steam trading cards`:
                  categories.tradingCards = 1;
                  break;
                default:
                  break;
              }
            }
          }
          if (categories.achievements && data.achievements && data.achievements.total) {
            categories.achievements = data.achievements.total;
          }
          categories.free = data.is_free;
          categories.dlc = data.type === `dlc` ? 1 : 0;
          if (categories.dlc && data.fullgame && data.fullgame.appid) {
            categories.base = parseInt(data.fullgame.appid);
          } else if (data.dlc) {
            categories.dlcs = data.dlc;
          }
          let genres = [];
          if (data.genres) {
            for (let i = 0, n = data.genres.length; i < n; ++i) {
              genres.push(data.genres[i].description.trim());
            }
          }
          genres.sort((a, b) => {
            return a.localeCompare(b, {
              sensitivity: `base`
            });
          });
          categories.earlyAccess = genres.indexOf(`Early Access`) >= 0 ? 1 : 0;
          categories.genres = genres.join(`, `);
          let platforms = data.platforms;
          categories.linux = platforms.linux ? 1 : 0;
          categories.mac = platforms.mac ? 1 : 0;
          categories.name = data.name;
          let price = data.price || data.price_overview;
          categories.price = price ? (price.currency === `USD` ? Math.ceil(price.initial / 100) : -1) : 0;
          if (data.release_date && data.release_date.date) {
            categories.releaseDate = new Date(data.release_date.date).getTime();
          }
        }
      }
      if (esgst.gc_lg || esgst.gc_r || esgst.gc_rm || esgst.gc_g_udt) {
        let response = await request({headers: {[`Cookie`]: `birthtime=0; mature_content=1`}, method: `GET`, notLimited: !esgst.gc_lr, url: `http://store.steampowered.com/${type.slice(0, -1)}/${id}`});
        let responseHtml = parseHtml(response.responseText);
        if (response.finalUrl.match(id)) {
          let elements = responseHtml.getElementsByClassName(`user_reviews_summary_row`);
          let n = elements.length;
          if (n > 0) {
            let rating = elements[n - 1].getAttribute(`data-tooltip-text`).replace(/,|\./g, ``);
            let match = rating.match(/(\d+)%.+?(\d+)/);
            let percentageIndex = 1;
            let countIndex = 2;
            if (!match) {
              match = rating.match(/(\d+).+?(\d+)%/);
              percentageIndex = 2;
              countIndex = 1;
            }
            if (match) {
              categories.rating = `${match[percentageIndex]}% (${match[countIndex]})`;
              rating = parseInt(match[percentageIndex]);
              if (rating >= 0) {
                if (rating < 40) {
                  categories.ratingType = `Negative`;
                } else if (rating < 70) {
                  categories.ratingType = `Mixed`;
                } else {
                  categories.ratingType = `Positive`;
                }
              } else {
                categories.ratingType = `?`;
              }
            }
          }
          categories.removed = 0;
          let tags = [];
          elements = responseHtml.querySelectorAll(`a.app_tag`);
          for (let i = 0, n = elements.length; i < n; ++i) {
            tags.push(elements[i].textContent.trim());
          }
          tags.sort((a, b) => {
            return a.localeCompare(b, {
              sensitivity: `base`
            });
          });
          categories.tags = tags.join(`, `);
          if (responseHtml.querySelector(`.learning_about`)) {
            categories.learning = 1;
          }
        } else {
          categories.removed = 1;
        }
      }
      if (esgst.gc_dlc_b && categories.dlc && categories.base) {
        if (gc.cache.apps[categories.base]) {
          categories.freeBase = gc.cache.apps[categories.base].free;
        }
        if (typeof categories.freeBase === `undefined`) {
          categories.freeBase = JSON.parse((await request({method: `GET`, notLimited: !esgst.gc_lr, url: `http://store.steampowered.com/api/appdetails?appids=${categories.base}&filters=basic&cc=us&l=en`})).responseText)[data.fullgame.appid].data.is_free;
        }
      }
      gc.cache[type][id] = categories;
      if (esgst.gc_rt) {
        gc_addCategory(gc.cache[type][id], games[type][id], id, esgst.games[type][id], type, type === `apps` ? gc.cache.hltb : null);
      }
    } catch (error) {
      console.log(error);
      for (const game of games[type][id]) {
        const panel = game.container.getElementsByClassName(`esgst-gc-panel`)[0];
        if (panel && !panel.getAttribute(`data-gcReady`)) {
          if (esgst.gc_il && !esgst.giveawayPath) {
            panel.previousElementSibling.style.display = `inline-block`;
            panel.classList.add(`esgst-gc-panel-inline`);
          }
          createElements(panel, `inner`, [{
            attributes: {
              class: `esgst-bold esgst-red`
            },
            type: `span`,
            children: [{
              attributes: {
                class: `fa fa-exclamation`
              },
              type: `i`
            }, {
              text: ` Error while loading game categories.`,
              type: `node`
            }]
          }]);
        }
      }
    }
  }

  function gc_checkPackage(id, savedGame) {
    const packg = esgst.games.subs[id];
    if (!packg || !packg.apps) {
      return;
    }
    const added = [];
    const games = packg.apps
      .map(x => {
        x = parseInt(x);
        const y = esgst.games.apps[x];
        if (!y) {
          return;
        }
        if (added.indexOf(x) > -1) {
          return;
        }
        added.push(x);
        y.id = x;
        return y;
      })
      .concat(
        Object.keys(esgst.games.apps)
        .filter(x => esgst.games.apps[x].packages && esgst.games.apps[x].packages.indexOf(id) > -1)
        .map(x => {
          x = parseInt(x);
          const y = esgst.games.apps[x];
          if (!y) {
            return;
          }
          if (added.indexOf(x) > -1) {
            return;
          }
          added.push(x);
          y.id = x;
          return y;
        })
      )
      .filter(x => x);
    let found = false;
    let isOwned = false;
    const count = {
      num: 0,
      total: packg.apps.length
    };
    for (const game of games) {
      if (!game) {
        continue;
      }
      if (game.wishlisted) {
        savedGame.wishlisted = game.wishlisted;
      }
      if (game.owned || packg.apps.indexOf(game.id) < 0) {
        if (!found) {
          isOwned = true;
        }
        if (game.owned) {
          count.num += 1;
        }
      } else {
        found = true;
        isOwned = false;
      }
    }
    savedGame.owned = isOwned;
    count.num = Math.min(count.num, count.total);
    return count;   
  }

  function gc_addCategory(cache, games, id, savedGame, type, hltb) {
    let active, category, colored, count, cv, elements, encodedName, genre, genreList, genres, giveaway, giveaways, html, i, j, k, n, panel, name, sent, singularType, user, value;
    if (type === `apps` && savedGame && savedGame.packages) {
      for (const subId of savedGame.packages) {
        gc_checkPackage(subId, savedGame);
      }
    }
    let packageCount = null;
    if (type === `subs` && savedGame && savedGame.apps) {
      packageCount = gc_checkPackage(id, savedGame);
    }
    singularType = type.slice(0, -1);
    name = cache ? cache.name : games[0].name;
    encodedName = encodeURIComponent(name.replace(/\.\.\.$/, ``));
    elements = [];
    let categories = games[0].grid ? esgst.gc_categories_gv : esgst.gc_categories;
    for (i = 0, n = categories.length; i < n; ++i) {
      category = categories[i];
      if (esgst[category]) {
        switch (category) {
          case `gc_fcv`:
            if ((savedGame && !savedGame.reducedCV && !savedGame.noCV) || !savedGame) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-fullCV`,
                  [`data-id`]: `gc_fcv`,
                  href: `https://www.steamgifts.com/bundle-games/search?q=${encodedName}`,
                  title: getFeatureTooltip(`gc_fcv`, `Full CV`)
                },
                text: esgst.gc_fcv_s ? (esgst.gc_fcv_s_i ? `` : `FCV`) : esgst.gc_fcvLabel,
                type: `a`,
                children: esgst.gc_fcv_s && esgst.gc_fcv_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_fcvIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_rcv`:
            if (savedGame && savedGame.reducedCV && (!esgst.gc_ncv_o || !savedGame.noCV)) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-reducedCV`,
                  [`data-id`]: `gc_rcv`,
                  href: `https://www.steamgifts.com/bundle-games/search?q=${encodedName}`,
                  title: getFeatureTooltip(`gc_rcv`, `Reduced CV since ${savedGame.reducedCV}`)
                },
                text: esgst.gc_rcv_s ? (esgst.gc_rcv_s_i ? `` : `RCV`) : esgst.gc_rcvLabel,
                type: `a`,
                children: esgst.gc_rcv_s && esgst.gc_rcv_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_rcvIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_ncv`:
            if (savedGame && savedGame.noCV) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-noCV`,
                  [`data-id`]: `gc_ncv`,
                  href: `https://www.steamgifts.com/bundle-games/search?q=${encodedName}`,
                  title: getFeatureTooltip(`gc_ncv`, `No CV since ${savedGame.noCV}`)
                },
                text: esgst.gc_ncv_s ? (esgst.gc_ncv_s_i ? `` : `NCV`) : esgst.gc_ncvLabel,
                type: `a`,
                children: esgst.gc_ncv_s && esgst.gc_ncv_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_ncvIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_hltb`:
            if (hltb) {
              const hltbTimes = hltb[id];
              if (hltbTimes) {
                let time = ``;
                if (hltbTimes.mainStory && hltbTimes.mainExtra && hltbTimes.completionist) {
                  // singleplayer
                  switch (esgst.gc_hltb_index_0) {
                    case 0:
                      time = hltbTimes.mainStory;
                      break;
                    case 1:
                      time = hltbTimes.mainExtra;
                      break;
                    case 2:
                      time = hltbTimes.completionist;
                      break;
                  }
                } else if (hltbTimes.solo && hltbTimes.coOp && hltbTimes.vs) {
                  // singleplayer/multiplayer
                  switch (esgst.gc_hltb_index_2) {
                    case 0:
                      time = hltbTimes.solo;
                      break;
                    case 1:
                      time = hltbTimes.coOp;
                      break;
                    case 2:
                      time = hltbTimes.vs;
                      break;
                  }
                } else if (hltbTimes.coOp && hltbTimes.vs) {
                  // singleplayer/multiplayer
                  switch (esgst.gc_hltb_index_1) {
                    case 0:
                      time = hltbTimes.coOp;
                      break;
                    case 1:
                      time = hltbTimes.vs;
                      break;
                  }
                } else {
                  time = hltbTimes.mainStory || hltbTimes.mainExtra || hltbTimes.completionist || hltbTimes.solo || hltbTimes.coOp || hltbTimes.vs;
                }
                if (time) {
                  let title = `Average time to beat based on HowLongToBeat:\n\n`;
                  if (hltbTimes.mainStory) {
                    title += `Main Story: ${hltbTimes.mainStory}\n`;
                  }
                  if (hltbTimes.mainExtra) {
                    title += `Main + Extra: ${hltbTimes.mainExtra}\n`;
                  }
                  if (hltbTimes.completionist) {
                    title += `Completionist: ${hltbTimes.completionist}\n`;
                  }
                  if (hltbTimes.solo) {
                    title += `Solo: ${hltbTimes.solo}\n`;
                  }
                  if (hltbTimes.coOp) {
                    title += `Co-Op: ${hltbTimes.coOp}\n`;
                  }
                  if (hltbTimes.vs) {
                    title += `Vs.: ${hltbTimes.vs}\n`;
                  }
                  elements.push({
                    attributes: {
                      class: `esgst-gc esgst-gc-hltb`,
                      [`data-id`]: `gc_hltb`,
                      href: `https://howlongtobeat.com/game.php?id=${hltb[id].id}`,
                      title: getFeatureTooltip(`gc_hltb`, title)
                    },
                    type: `a`,
                    children: [{
                      attributes: {
                        class: `fa fa-gamepad`
                      },
                      type: `i`
                    }, {
                      text: time,
                      type: `node`
                    }]
                  });
                }
              }
            }
            break;
          case `gc_h`:
            if (savedGame && savedGame.hidden) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-hidden`,
                  [`data-id`]: `gc_h`,
                  href: `https://www.steamgifts.com/account/settings/giveaways/filters/search?q=${encodedName}`,
                  title: getFeatureTooltip(`gc_h`, `Hidden`)
                },
                text: esgst.gc_h_s ? (esgst.gc_h_s_i ? `` : `H`) : esgst.gc_hLabel,
                type: `a`,
                children: esgst.gc_h_s && esgst.gc_h_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_hIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_i`:
            if (savedGame && savedGame.ignored) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-ignored`,
                  [`data-id`]: `gc_i`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_i`, `Ignored`)
                },
                text: esgst.gc_i_s ? (esgst.gc_i_s_i ? `` : `I`) : esgst.gc_iLabel,
                type: `a`,
                children: esgst.gc_i_s && esgst.gc_i_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_iIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_o`:
            if (savedGame && savedGame.owned) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-owned`,
                  [`data-id`]: `gc_o`,
                  href: `https://www.steamgifts.com/account/steam/games/search?q=${encodedName}`,
                  title: getFeatureTooltip(`gc_o`, `Owned`)
                },
                text: esgst.gc_o_s ? (esgst.gc_o_s_i ? `` : `O`) : esgst.gc_oLabel,
                type: `a`,
                children: esgst.gc_o_s && esgst.gc_o_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_oIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            if (esgst.gc_o_a) {
              for (const account of esgst.gc_o_altAccounts) {
                let game = account.games[type][id];
                if (game && game.owned) {
                  elements.push({
                    attributes: {
                      class: `esgst-gc esgst-gc-owned`,
                      [`data-bgColor`]: account.bgColor,
                      [`data-color`]: account.color,
                      [`data-id`]: `gc_o`,
                      href: `http://steamcommunity.com/profiles/${account.steamId}/games`,
                      style: `background-color: ${account.bgColor}; color: ${account.color};`,
                      title: getFeatureTooltip(`gc_o`, `Owned by ${account.name}`)
                    },
                    text: esgst.gc_o_s ? (esgst.gc_o_s_i ? `` : `O`) : account.label,
                    type: `a`,
                    children: esgst.gc_o_s && esgst.gc_o_s_i ? [{
                      attributes: {
                        class: `fa fa-${account.icon}`
                      },
                      type: `i`
                    }] : null
                  });
                }
              }
            }
            break;
          case `gc_w`:
            if (savedGame && savedGame.wishlisted) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-wishlisted`,
                  [`data-id`]: `gc_w`,
                  href: `https://www.steamgifts.com/account/steam/wishlist/search?q=${encodedName}`,
                  title: getFeatureTooltip(`gc_w`, `Wishlisted${typeof savedGame.wishlisted === `number` ? ` since ${gc_formatDate(savedGame.wishlisted * 1e3)}` : ``}`)
                },
                text: esgst.gc_w_s ? (esgst.gc_w_s_i ? `` : `W`) : esgst.gc_wLabel,
                type: `a`,
                children: esgst.gc_w_s && esgst.gc_w_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_wIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_pw`:
            if (savedGame && savedGame.won && (!esgst.gc_pw_o || !esgst.gc_o || !savedGame.owned)) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-won`,
                  [`data-id`]: `gc_pw`,
                  href: `https://www.steamgifts.com/user/${esgst.usename}/won/search?q=${encodedName}`,
                  title: getFeatureTooltip(`gc_pw`, `Previously Won`)
                },
                text: esgst.gc_pw_s ? (esgst.gc_pw_s_i ? `` : `PW`) : esgst.gc_pwLabel,
                type: `a`,
                children: esgst.gc_pw_s && esgst.gc_pw_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_pwIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_gi`:
            if (cache && cache.price) {
              let price = cache.price;
              const heading = games[0].heading;
              if (heading) {
                const points = heading.innerHTML.match(/<span\sclass="giveaway__heading__thin">\((\d+?)P\)<\/span>/);
                if (points) {
                  price = parseInt(points[1]);
                }
              }
              user = esgst.users.users[esgst.steamId];
              if (user) {
                giveaways = user.giveaways;
                if (giveaways) {
                  giveaways = giveaways.sent[type][id];
                  active = 0;
                  count = 0;
                  sent = 0;
                  if (giveaways) {
                    let currentDate = Date.now();
                    let numGiveaways;
                    for (j = 0, numGiveaways = giveaways.length; j < numGiveaways; ++j) {
                      giveaway = esgst.giveaways[giveaways[j]];
                      if (giveaway) {
                        if (Array.isArray(giveaway.winners)) {
                          if (giveaway.winners.length > 0) {
                            giveaway.winners.forEach(winner => {
                              count += 1;
                              if ((giveaway.entries >= 5 || (!giveaway.inviteOnly && !giveaway.group && !giveaway.whitelist)) && winner.status === `Received`) {
                                sent += 1;
                              }
                            });
                          } else if (currentDate < giveaway.endTime) {
                            active += giveaway.copies;
                          }
                        } else if (giveaway.winners > 0) {
                          count += Math.min(giveaway.entries, giveaway.winners);
                          if (giveaway.entries >= 5 || (!giveaway.inviteOnly && !giveaway.group && !giveaway.whitelist)) {
                            sent += Math.min(giveaway.entries, giveaway.winners);
                          }
                        } else if (currentDate < giveaway.endTime) {
                          active += giveaway.copies;
                        }
                      }
                    }
                    value = price;
                    if (savedGame) {
                      if (savedGame.noCV) {
                        value = 0;
                      } else if (savedGame.reducedCV) {
                        value *= 0.15;
                      }
                    }
                    if (sent > 5) {
                      for (j = 0, numGiveaways = sent - 5; j < numGiveaways; ++j) {
                        value *= 0.90;
                      }
                    }
                    cv = (sent + 1) > 5 ? value * 0.90 : value;
                    cv = Math.round(cv * 100) / 100;
                  } else {
                    value = price;
                    if (savedGame) {
                      if (savedGame.noCV) {
                        value = 0;
                      } else if (savedGame.reducedCV) {
                        value *= 0.15;
                      }
                    }
                    cv = Math.round(value * 100) / 100;
                  }
                  elements.push({
                    attributes: {
                      class: `esgst-gc esgst-gc-giveawayInfo`,
                      [`data-id`]: `gc_gi`,
                      href: `https://www.steamgifts.com/user/${esgst.username}`,
                      title: getFeatureTooltip(`gc_gi`, `You have sent ${count} copies of this game (${sent} of which added to your CV)${active ? `\nYou currently have ${active} open giveaways for this game` : ``}\n\n${price !== -1 ? `You should get $${cv} real CV for sending a new copy of this game\nA giveaway for this game is worth ${Math.min(Math.ceil(price), 50)}P` : `ESGST was unable to retrieve the price of this game (most likely because the game was removed from the Steam store)`}`)
                    },
                    type: `a`,
                    children: [{
                      attributes: {
                        class: `fa fa-info`
                      },
                      type: `i`
                    }, {
                      text: ` ${count} `,
                      type: `node`
                    }, {
                      attributes: {
                        class: `fa fa-dollar`
                      },
                      type: `i`
                    }, {
                      text: ` ${price !== -1 ? cv : `?`}`,
                      type: `node`
                    }]
                  });
                }
              }
            }
            break;
          case `gc_r`:
            if (cache && cache.rating) {
              let colors = null;
              let percentage = parseInt(cache.rating.match(/(\d+)%/)[1]);
              for (let i = 0, n = esgst.gc_r_colors.length; i < n; i++) {
                colors = esgst.gc_r_colors[i];
                if (percentage >= colors.lower && percentage <= colors.upper) {
                  break;
                }
              }
              if (!colors) {
                colors = {
                  bgColor: `#7f8c8d`,
                  color: `#ffffff`,
                  icon: `fa-question-circle`
                };
              }
              let match = cache.rating.match(/\((\d+)\)/);
              if (match) {
                cache.rating = cache.rating.replace(/\(\d+\)/, `(${parseInt(match[1]).toLocaleString()})`);
              }
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-rating`,
                  [`data-bgColor`]: colors.bgColor,
                  [`data-color`]: colors.color,
                  [`data-id`]: `gc_r`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  style: `background-color: ${colors.bgColor}; color: ${colors.color};`,
                  title: getFeatureTooltip(`gc_r`, cache.rating)
                },
                type: `a`,
                children: [colors.icon.match(/\w/) ? {
                  attributes: {
                    class: `fa fa-${colors.icon}`
                  },
                  type: `i`
                } : {
                  attributes: {
                    style: `font-size: 14px;`
                  },
                  text: colors.icon,
                  type: `span`
                }, {
                  text: esgst.gc_r_s ? ` ${cache.rating}` : ``,
                  type: `node`
                }]
              });
            }
            break;
          case `gc_a`:
            if (cache && cache.achievements) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-achievements`,
                  [`data-id`]: `gc_a`,
                  href: `http://steamcommunity.com/stats/${id}/achievements`,
                  title: getFeatureTooltip(`gc_a`, `Achievements (${cache.achievements})`)
                },
                text: esgst.gc_a_s ? (esgst.gc_a_s_i ? `` : `A`) : esgst.gc_aLabel,
                type: `a`,
                children: esgst.gc_a_s && esgst.gc_a_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_aIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_mp`:
            if (cache && cache.multiplayer) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-multiplayer`,
                  [`data-id`]: `gc_mp`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_mp`, `Multiplayer`)
                },
                text: esgst.gc_mp_s ? (esgst.gc_mp_s_i ? `` : `MP`) : esgst.gc_mpLabel,
                type: `a`,
                children: esgst.gc_mp_s && esgst.gc_mp_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_mpIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_sp`:
            if (cache && cache.singleplayer) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-singleplayer`,
                  [`data-id`]: `gc_sp`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_sp`, `Singleplayer`)
                },
                text: esgst.gc_sp_s ? (esgst.gc_sp_s_i ? `` : `SP`) : esgst.gc_spLabel,
                type: `a`,
                children: esgst.gc_sp_s && esgst.gc_sp_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_spIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_sc`:
            if (cache && cache.steamCloud) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-steamCloud`,
                  [`data-id`]: `gc_sc`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_sc`, `Steam Cloud`)
                },
                text: esgst.gc_sc_s ? (esgst.gc_sc_s_i ? `` : `SC`) : esgst.gc_scLabel,
                type: `a`,
                children: esgst.gc_sc_s && esgst.gc_sc_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_scIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_tc`:
            if (cache && cache.tradingCards) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-tradingCards`,
                  [`data-id`]: `gc_tc`,
                  href: `http://www.steamcardexchange.net/index.php?gamepage-${singularType}id-${id}`,
                  title: getFeatureTooltip(`gc_tc`, `Trading Cards`)
                },
                text: esgst.gc_tc_s ? (esgst.gc_tc_s_i ? `` : `TC`) : esgst.gc_tcLabel,
                type: `a`,
                children: esgst.gc_tc_s && esgst.gc_tc_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_tcIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_l`:
            if (cache && cache.linux) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-linux`,
                  [`data-id`]: `gc_l`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_l`, `Linux`)
                },
                text: esgst.gc_l_s ? (esgst.gc_l_s_i ? `` : `L`) : esgst.gc_lLabel,
                type: `a`,
                children: esgst.gc_l_s && esgst.gc_l_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_lIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_m`:
            if (cache && cache.mac) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-mac`,
                  [`data-id`]: `gc_m`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_m`, `Mac`)
                },
                text: esgst.gc_m_s ? (esgst.gc_m_s_i ? `` : `M`) : esgst.gc_mLabel,
                type: `a`,
                children: esgst.gc_m_s && esgst.gc_m_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_mIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_dlc`:
            if (cache && cache.dlc) {
              let baseOwned;
              if (esgst.gc_dlc_o) {
                if (cache.base && esgst.games.apps[cache.base]) {
                  baseOwned = esgst.games.apps[cache.base].owned;
                }
              }
              const children = [];
              if (esgst.gc_dlc_s) {
                if (esgst.gc_dlc_s_i) {
                  children.push({
                    attributes: {
                      class: `fa fa-${esgst.gc_dlcIcon}`
                    },
                    type: `i`
                  });
                  if (esgst.gc_dlc_o && baseOwned) {
                    children.push({
                      attributes: {
                        class: `fa fa-${esgst.gc_oIcon} esgst-gc-dlcOwned`
                      },
                      type: `i`
                    });
                  }
                  if (esgst.gc_dlc_b && typeof cache.freeBase !== `undefined`) {
                    if (cache.freeBase) {
                      children.push({
                        attributes: {
                          class: `fa fa-certificate esgst-gc-dlcFree`
                        },
                        type: `i`
                      });
                    } else {                      
                      children.push({
                        attributes: {
                          class: `fa fa-money esgst-gc-dlcNonFree`
                        },
                        type: `i`
                      });
                    }
                  }
                } else {
                  children.push({
                    text: `DLC`,
                    type: `node`
                  });
                  if (esgst.gc_dlc_o && baseOwned) {
                    children.push({
                      attributes: {
                        class: `esgst-gc-dlcOwned`
                      },
                      text: `(O)`,
                      type: `span`
                    });
                  }
                  if (esgst.gc_dlc_b && typeof cache.freeBase !== `undefined`) {
                    if (cache.freeBase) {
                      children.push({
                        attributes: {
                          class: `esgst-gc-dlcFree`
                        },
                        text: `(F)`,
                        type: `span`
                      });
                    } else {
                      children.push({
                        attributes: {
                          class: `esgst-gc-dlcNonFree`
                        },
                        text: `(NF)`,
                        type: `span`
                      });
                    }
                  }
                }
              } else {
                children.push({
                  text: esgst.gc_dlcLabel,
                  type: `node`
                });
                if (esgst.gc_dlc_o && baseOwned) {
                  children.push({
                    attributes: {
                      class: `esgst-gc-dlcOwned`
                    },
                    text: `(Owned)`,
                    type: `span`
                  });
                }
                if (esgst.gc_dlc_b && typeof cache.freeBase !== `undefined`) {
                  if (cache.freeBase) {
                    children.push({
                      attributes: {
                        class: `esgst-gc-dlcFree`
                      },
                      text: `(Free)`,
                      type: `span`
                    });
                  } else {
                    children.push({
                      attributes: {
                        class: `esgst-gc-dlcNonFree`
                      },
                      text: `(Not Free)`,
                      type: `span`
                    });
                  }
                }
              }
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-dlc`,
                  [`data-id`]: `gc_dlc`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_dlc`, `DLC${esgst.gc_dlc_b && typeof cache.freeBase !== `undefined` ? (cache.freeBase ? ` (the base game of this DLC is free)` : ` (the base game of this DLC is not free)`) : ``}`)
                },
                type: `a`,
                children
              });
            }
            break;
          case `gc_p`:
            if (type === `subs`) {
              const children = [];
              if (esgst.gc_p_s) {
                if (esgst.gc_p_s_i) {
                  children.push({
                    attributes: {
                      class: `fa fa-${esgst.gc_pIcon}`
                    },
                    type: `i`
                  });
                } else {
                  children.push({
                    text: `P`,
                    type: `node`
                  });
                }
              } else {
                children.push({
                  text: esgst.gc_pLabel,
                  type: `node`
                });
              }
              if (packageCount) {
                children.push({
                  text: ` (${packageCount.num}/${packageCount.total})`,
                  type: `node`
                });
              }
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-package`,
                  [`data-id`]: `gc_p`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_p`, `Package${savedGame && savedGame.apps ? ` (${savedGame.apps.length})` : ``}${packageCount ? ` (${packageCount.num} owned)` : ``}`)
                },
                type: `a`,
                children
              });
            }
            break;
          case `gc_ea`:
            if (cache && cache.earlyAccess) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-earlyAccess`,
                  [`data-id`]: `gc_ea`,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_ea`, `Early Access`)
                },
                text: esgst.gc_ea_s ? (esgst.gc_ea_s_i ? `` : `EA`) : esgst.gc_eaLabel,
                type: `a`,
                children: esgst.gc_ea_s && esgst.gc_ea_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_eaIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_lg`:
            if (cache && cache.learning === 1) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-learning`,
                  [`data-id`]: `gc_lg`,
                  href: `http://steamdb.info/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_lg`, `Learning`)
                },
                text: esgst.gc_lg_s ? (esgst.gc_lg_s_i ? `` : `LG`) : esgst.gc_lgLabel,
                type: `a`,
                children: esgst.gc_lg_s && esgst.gc_lg_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_lgIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_rm`:
            if (cache && cache.removed === 1) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-removed`,
                  [`data-id`]: `gc_rm`,
                  href: `http://steamdb.info/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_rm`, `Removed`)
                },
                text: esgst.gc_rm_s ? (esgst.gc_rm_s_i ? `` : `RM`) : esgst.gc_rmLabel,
                type: `a`,
                children: esgst.gc_rm_s && esgst.gc_rm_s_i ? [{
                  attributes: {
                    class: `fa fa-${esgst.gc_rmIcon}`
                  },
                  type: `i`
                }] : null
              });
            }
            break;
          case `gc_rd`:
            if (cache && cache.releaseDate) {
              elements.push({
                attributes: {
                  class: `esgst-gc esgst-gc-releaseDate`,
                  [`data-id`]: `gc_rd`,
                  [`data-timestamp`]: cache.releaseDate === `?` ? cache.releaseDate : cache.releaseDate / 1e3,
                  href: `http://store.steampowered.com/${singularType}/${id}`,
                  title: getFeatureTooltip(`gc_rd`, `Release Date`)
                },
                type: `a`,
                children: [{
                  attributes: {
                    class: `fa fa-${esgst.gc_rdIcon}`
                  },
                  type: `i`
                }, {
                  text: ` ${gc_formatDate(cache.releaseDate)}`,
                  type: `node`
                }]
              });
            }
            break;
          case `gc_g`:
            if (cache && cache.genres) {
              let filters;
              genres = esgst.gc_g_udt && cache.tags ? `${cache.genres}, ${cache.tags}` : cache.genres;
              genreList = sortArray(Array.from(new Set(genres.split(/,\s/))));
              genres = genreList.join(`, `);
              if (esgst.gc_g_filters.trim()) {
                filters = esgst.gc_g_filters.trim().toLowerCase().split(/\s*,\s*/);
              }
              for (j = genreList.length - 1; j >= 0; --j) {
                genre = genreList[j].toLowerCase();
                if (!filters || filters.indexOf(genre) > -1) {
                  for (k = esgst.gc_g_colors.length - 1; k >= 0 && esgst.gc_g_colors[k].genre.toLowerCase() !== genre; --k);
                  if (k >= 0) {
                    if (esgst.gc_g_s) {
                      genreList[j] = {
                        attributes: {
                          class: `esgst-gc esgst-gc-genres`,
                          href: `http://store.steampowered.com/${singularType}/${id}`,
                          style: `background-color: ${esgst.gc_g_colors[k].bgColor}; color: ${esgst.gc_g_colors[k].color};`,
                          title: getFeatureTooltip(`gc_g_s`, genreList[j])
                        },
                        text: genreList[j],
                        type: `a`
                      };
                    } else {
                      genreList[j] = {
                        attributes: {
                          style: `color: ${esgst.gc_g_colors[k].color}`
                        },
                        text: genreList[j],
                        type: `span`
                      };
                      if (j < genreList.length - 1) {
                        genreList.splice(j + 1, 0, {
                          text: `, `,
                          type: `node`
                        });
                      }
                    }
                  } else if (esgst.gc_g_s) {
                    genreList[j] = {
                      attributes: {
                        class: `esgst-gc esgst-gc-genres`,
                        href: `http://store.steampowered.com/${singularType}/${id}`,
                        title: getFeatureTooltip(`gc_g_s`, genreList[j])
                      },
                      text: genreList[j],
                      type: `a`
                    };
                  } else {
                    genreList[j] = {
                      text: genreList[j],
                      type: `node`
                    };
                    if (j < genreList.length - 1) {
                      genreList.splice(j + 1, 0, {
                        text: `, `,
                        type: `node`
                      });
                    }
                  }
                } else {
                  genreList.splice(j, 1);
                }
              }
              if (esgst.gc_g_s) {
                elements.push({
                  attributes: {
                    class: `esgst-gc esgst-gc-genres`,
                    [`data-id`]: `gc_g`
                  },
                  type: `span`,
                  children: genreList
                });
              } else if (genreList.length > 0) {
                elements.push({
                  attributes: {
                    class: `esgst-gc esgst-gc-genres`,
                    [`data-id`]: `gc_g`,
                    href: `http://store.steampowered.com/${singularType}/${id}`,
                    title: getFeatureTooltip(`gc_g`, genres)
                  },
                  type: `a`,
                  children: genreList
                });
              }
            }
            break;
        }
      }
    }
    let gc = {
      categoryKey: games[0].grid ? `gc_categories_gv` : `gc_categories`,
      indexKey: games[0].grid ? `gc_indexes_gv` : `gc_indexes`,
      source: null
    };
    for (i = 0, n = games.length; i < n; ++i) {
      panel = games[i].container.getElementsByClassName(`esgst-gc-panel`)[0];
      if (panel && !panel.getAttribute(`data-gcReady`)) {
        if (esgst.gc_il && !esgst.giveawayPath) {
          panel.previousElementSibling.style.display = `inline-block`;
          panel.classList.add(`esgst-gc-panel-inline`);
        }
        createElements(panel, `inner`, elements);
        if (!esgst.gc_lp || (!esgst.gc_lp_gv && games[i].grid)) {
          for (j = panel.children.length - 1; j > -1; --j) {
            panel.children[j].removeAttribute(`href`);
          }
        }
        if (games[i].columns) {
          for (j = games[i].columns.children.length - 1; j > -1; j--) {
            let item = games[i].columns.children[j];
            item.addEventListener(`dragenter`, gc_getSource.bind(null, gc, games[i].columns, j, item, null, false));
          }
          games[i].columns.addEventListener(`dragenter`, gc_getSource.bind(null, gc, games[i].columns, 0, null, games[i].columns, true));
          if (games[i].gvIcons) {
            games[i].gvIcons.addEventListener(`dragenter`, gc_getSource.bind(null, gc, games[i].columns, 0, null, games[i].gvIcons, true));
          }
          panel.addEventListener(`dragenter`, gc_getSource.bind(null, gc, games[i].columns, -1, null, panel, false));
          for (j = panel.children.length - 1; j > -1; j--) {
            let item = panel.children[j];
            item.setAttribute(`draggable`, true);
            item.addEventListener(`dragstart`, gc_setSource.bind(null, gc, item, panel, games[i].columns, games[i].gvIcons));
            item.addEventListener(`dragenter`, gc_getSource.bind(null, gc, games[i].columns, -1, item, null, false));
            item.addEventListener(`dragend`, gc_saveSource.bind(null, gc, panel, games[i].columns, games[i].gvIcons));
            let id = item.getAttribute(`data-id`);
            let index = esgst[gc.indexKey][id];
            if (isSet(index) && index !== -1) {
              item.classList.add(esgst.giveawayPath ? `featured__column` : `giveaway__column`);
              if (item.getAttribute(`data-color`)) {
                item.firstElementChild.style.color = item.getAttribute(`data-bgColor`);
                item.style.color = ``;
                item.style.background = ``;
              }
              games[i].columns.insertBefore(item, games[i].columns.children[index]);
            }
          }
        }
        panel.setAttribute(`data-gcReady`, 1);
      }
    }
  }

  function gc_formatDate(timestamp) {
    if (timestamp === `?`) return timestamp;
    let date = new Date(timestamp);
    return esgst.gc_rdLabel.replace(/DD/, date.getDate()).replace(/MM/, date.getMonth() + 1).replace(/Month/, [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`][date.getMonth()]).replace(/Mon/, [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`][date.getMonth()]).replace(/YYYY/, date.getFullYear());
  }

  function gc_setSource(gc, item, panel, columns, gvIcons, event) {
    event.dataTransfer.setData(`text/plain`, ``);
    gc.source = item;
    setTimeout(() => {
      if (!panel.children.length) {
        panel.style.height = `28px`;
        panel.style.width = `100%`;
      }
      if (columns && !columns.children.length) {
        columns.style.height = `25px`;
        columns.style.width = `100%`;
      }
      if (gvIcons && !gvIcons.children.length) {
        gvIcons.style.height = `28px`;
        gvIcons.style.width = `100%`;
      }
    }, 0);
  }

  function gc_getSource(gc, context, index, item, panel, column) {
    let current = gc.source;
    if (!gc.source || gc.source === item) return;
    if (panel) {
      if (!panel.children.length) {
        panel.appendChild(gc.source);
        esgst[gc.indexKey][gc.source.getAttribute(`data-id`)] = index;
        if (column) {
          gc.source.classList.add(esgst.giveawayPath ? `featured__column` : `giveaway__column`);
        } else {
          gc.source.classList.remove(esgst.giveawayPath ? `featured__column` : `giveaway__column`);
          if (gc.source.getAttribute(`data-color`)) {
            gc.source.firstElementChild.style.color = ``;
            gc.source.style.color = gc.source.getAttribute(`data-color`);
            gc.source.style.backgroundColor = gc.source.getAttribute(`data-bgColor`);
          }
        }
      }
      return;
    }
    do {
      current = current.previousElementSibling;
      if (current && current === item) {
        if (context.contains(item)) {
          gc.source.classList.add(esgst.giveawayPath ? `featured__column` : `giveaway__column`);
          if (gc.source.getAttribute(`data-color`)) {
            gc.source.firstElementChild.style.color = gc.source.getAttribute(`data-bgColor`);
            gc.source.style.color = ``;
            gc.source.style.background = ``;
          }
        } else {
          gc.source.classList.remove(esgst.giveawayPath ? `featured__column` : `giveaway__column`);
          if (gc.source.getAttribute(`data-color`)) {
            gc.source.firstElementChild.style.color = ``;
            gc.source.style.color = gc.source.getAttribute(`data-color`);
            gc.source.style.backgroundColor = gc.source.getAttribute(`data-bgColor`);
          }
        }
        if (item.getAttribute(`data-id`)) {
          esgst[gc.categoryKey].splice(esgst[gc.categoryKey].indexOf(item.getAttribute(`data-id`)), 0, esgst[gc.categoryKey].splice(esgst[gc.categoryKey].indexOf(gc.source.getAttribute(`data-id`)), 1)[0]);
          esgst[gc.indexKey][gc.source.getAttribute(`data-id`)] = isSet(esgst[gc.indexKey][item.getAttribute(`data-id`)]) ? esgst[gc.indexKey][item.getAttribute(`data-id`)] : -1;
        } else {
          esgst[gc.indexKey][gc.source.getAttribute(`data-id`)] = index;
        }
        item.parentElement.insertBefore(gc.source, item);
        return;
      }
    } while (current);
    if (context.contains(item)) {
      gc.source.classList.add(esgst.giveawayPath ? `featured__column` : `giveaway__column`);
      if (gc.source.getAttribute(`data-color`)) {
        gc.source.firstElementChild.style.color = gc.source.getAttribute(`data-bgColor`);
        gc.source.style.color = ``;
        gc.source.style.background = ``;
      }
    } else {
      gc.source.classList.remove(esgst.giveawayPath ? `featured__column` : `giveaway__column`);
      if (gc.source.getAttribute(`data-color`)) {
        gc.source.firstElementChild.style.color = ``;
        gc.source.style.color = gc.source.getAttribute(`data-color`);
        gc.source.style.backgroundColor = gc.source.getAttribute(`data-bgColor`);
      }
    }
    if (item.getAttribute(`data-id`)) {
      esgst[gc.categoryKey].splice(esgst[gc.categoryKey].indexOf(item.getAttribute(`data-id`)), 0, esgst[gc.categoryKey].splice(esgst[gc.categoryKey].indexOf(gc.source.getAttribute(`data-id`)), 1)[0]);
      esgst[gc.indexKey][gc.source.getAttribute(`data-id`)] = isSet(esgst[gc.indexKey][item.getAttribute(`data-id`)]) ? esgst[gc.indexKey][item.getAttribute(`data-id`)] : -1;
    } else {
      esgst[gc.indexKey][gc.source.getAttribute(`data-id`)] = index + 1;
    }
    item.parentElement.insertBefore(gc.source, item.nextElementSibling);
  }

  async function gc_saveSource(gc, panel, columns, gvIcons) {
    gc.source = null;
    panel.style.height = ``;
    panel.style.width = ``;
    if (columns) {
      columns.style.height = ``;
      columns.style.width = ``;
    }
    if (gvIcons) {
      gvIcons.style.height = ``;
      gvIcons.style.width = ``;
    }
    await setSetting(gc.categoryKey, esgst[gc.categoryKey]);
    await setSetting(gc.indexKey, esgst[gc.indexKey]);
  }
  